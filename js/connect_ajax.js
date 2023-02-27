
function regist_user() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("Phone").value;
    let zip = document.getElementById("zip-code").value;

    let data = {name:name, email:email, phone:phone, zip:zip};
    let xmlh = new XMLHttpRequest();
    xmlh.open("POST","http://localhost/main-page/php/connection.php");
    xmlh.getResponseHeader("Content-type", "application/x-www-form-urlencoded");
    xmlh.send("json="+JSON.stringify(data));
    console.log(JSON.stringify(data));
    xmlh.onload = function () {
        alert(xmlh.responseText);
    }
}