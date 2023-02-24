<?PHP
$email = "user@user.com";
$comment = "hola soy un comentario";
$connect = new mysqli('localhost','root','','practica');

$consulta = "INSERT INTO comentarios (email,text) VALUES ('$email','$comment')";
$connect->query ($consulta);

?>