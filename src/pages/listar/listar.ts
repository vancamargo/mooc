import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the ListarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar',
  templateUrl: 'listar.html',
})
export class ListarPage {

  private url = 'http://192.168.15.4:8200/index.php?file=listar.json';

  public cursos;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.listar();
  }

  listar() {
    this.http.get(this.url).map(res => res.json()).subscribe(data => {
      this.cursos = data;

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarPage');
  }

}
