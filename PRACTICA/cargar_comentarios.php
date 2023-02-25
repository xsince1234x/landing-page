<?php
$connect = new mysqli('localhost','root','','practica');
$consulta = "SELECT email,text FROM comentarios";
$request=$connect->query($consulta);

while ($array=$request->fetch_array()) {
   $db=("email"=>$array['email']) ;
}
 echo json_encode($db);
?>