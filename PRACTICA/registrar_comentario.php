<?PHP
header("Content-Type: application/x-www-form-urlencoded; charset=UTF-8");
$obj = json_decode($_POST["json"], false);

$connect = new mysqli('localhost','root','','practica');

$consulta = "INSERT INTO comentarios (email,text) VALUES ('$obj->email','$obj->comentario')";
$connect->query ($consulta);

echo "code: 200";
?>