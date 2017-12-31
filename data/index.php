<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Method: *');

$file = $_GET['file'];

echo file_get_contents($file);