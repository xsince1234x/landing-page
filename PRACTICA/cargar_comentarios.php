<?php
$connect = new mysqli('localhost','root','','practica');
$consulta = "SELECT email,text FROM comentarios";
$request=$connect->query($consulta);

$comentarios[] = array();
$cont = 0;

while ($array=$request->fetch_array()) {
   $comentarios[$cont]['email'] = $array['email'];
   $comentarios[$cont]['text'] = $array['text'];
   $cont++;
}

 echo json_encode($comentarios);
?>