function text_veryfi(request){
    let message = document.getElementById("message_form");
    console.log(request);
    if (request == "200") {
        message.innerHTML = "your registration was successful";
    }else if (request == "400") {
        message.innerHTML = "You must fill in all fields";
    }
}
function regist_user() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let zip = document.getElementById("zip-code").value;
    document.getElementById("main-form").reset();

    let data = {name:name, email:email, phone:phone, zip:zip};
    let xmlh = new XMLHttpRequest();
    xmlh.open("POST","http://localhost/main-page/php/connection.php");
    xmlh.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlh.send("json="+JSON.stringify(data));
    xmlh.onload = function () {
        text_veryfi(xmlh.responseText);
    }
}