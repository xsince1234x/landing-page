function validar () {
    var name = document.getElementById ( "name" ).value ;
    let email = document.getElementById ( "email" ).value ;        
    let phone = document.getElementById ( "phone" ).value ;
    let code = document.getElementById ("zip-code").value ;
    let message = document.getElementById("message_form");
    
     if ( name == '' || email == '' || phone== '' || code == ''){
        message.innerHTML = "You must fill in all fields";
        return false;
    }else if ( name.length > 20 ) {
        message.innerHTML = " El nombre es muy largo ";
       return false ;
    }else if ( email.length > 30 ) {
        message.innerHTML ="correo muy largo";
       return false ;
    }else if (phone.length > 15) {
        message.innerHTML ="telefono muy largo";
        return false;
    }else if ( code.length > 8) {
        message.innerHTML =" El codigo es muy largo ";
       return false ;
    }
    let cont = 0; 
    for (let i = 0; i < email.length; i++) {
            if (email[i] == "@") {
                cont = cont+1; 
            } else if (email[i] == "."  && cont == 1 && i == email.length-4){
                cont = cont+1;
            }
    }
    if (cont < 2) {
        alert("correo malo");
        return false;
    }
    regist_user();
}

function name_verifi(e) {
    key = e.keyCode || e.which;
    tecla = String. fromCharCode(key).toString () ;
    letras= "ABCDEFGHIJKLMNÑOPOQRSTUVWXYZÁÉÍÓÚÜabcedfghijklmnñopqrstuvwxyzéüáíóú";

    especiales = [8,13];
    tecla_especial = false
    for(var i in especiales) {
        if (key == especiales[i]) {
        tecla_especial = true;
        break;
        }
    }

    if (letras.indexOf(tecla)==-1 && !tecla_especial){return false;}
}

function email_verifi(e) {
    key = e.keyCode || e.which;
    tecla = String. fromCharCode(key).toString () ;
    letras= "ABCDEFGHIJKLMNÑOPOQRSTUVWXYZÁÉÍÓÚÜabcedfghijklmnñopqrstuvwxyzéüáíóú@.-_1234567890";

    especiales = [8,13];
    tecla_especial = false
    for(var i in especiales) {
        if (key == especiales[i]) {
        tecla_especial = true;
        break;
        }
    }

    if (letras.indexOf(tecla)==-1 && !tecla_especial){return false;}
}

function number_verifi(e) {
    if (window.event) {
        keynum = e.keyCode;
    }else{
        keynum = e.which;
    }
        
        if((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13 || keynum == 43){
            return true;
        }else{return false;}
}

