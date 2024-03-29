function subscribe() {
    var email = document.getElementById("subscribe").value;
    if(validateEmail(email)) {
        document.getElementById("mesaj").innerHTML = "V-ati abonat cu succes.";   
    }
    else {
        document.getElementById("mesaj").innerHTML = "Introduceti o adresa de email valida.";
    }
}
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}