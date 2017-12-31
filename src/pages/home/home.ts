import { Component, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { EditarPage } from '../editar/editar';


export class Curso {
  codigo: number;
  nome: string;
  valor: number;
  descricao: string;
  maxparcela: number;
  qtdiavencimento: string;

}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Injectable()
export class HomePage {

  private url = 'http://192.168.15.4:8200/index.php?file=incluir.json';

  public curso: Curso;

  constructor(public navCtrl: NavController, public http: Http) {
    this.curso = new Curso();
  }

  salvar() {
    this.http.post(this.url, this.curso).map(res => res.json()).subscribe(data => {
      //console.log(`cccc`, data);
      if (data.sucesso) {
       this.navCtrl.setRoot(EditarPage)
      }
      else {
        console.log(data.message)
      }

    });
  }

}
