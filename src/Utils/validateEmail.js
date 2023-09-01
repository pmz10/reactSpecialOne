function validateEmail(valor, divError){
    if(
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
            valor
        )
    ){
        divError.innerHTML = ""; // limpar o erro caso exista
        return true;
    } else {
        divError.innerHTML="E-mail inválido";
        return false;
    }
}