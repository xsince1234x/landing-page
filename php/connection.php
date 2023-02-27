<?php
header("Content-Type: application/x-www-form-urlencoded; charset=UTF-8");
$json = $_POST["json"];
$form=json_decode($json,false);
$connect = new mysqli('localhost','root','','ox_floors');
$query="INSERT INTO registro_user (name,email,phone,zip_code,created_at) VALUES ('$form->name','$form->email','$form->phone','$form->zip',CURDATE())";
$connect->query($query);
if ($connect->affected_rows > 0) {
    echo "200";
}
?>