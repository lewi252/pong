// Ouvinte de eventos para o teclado
document.addEventListener('keydown', function (evento){

    
    var raquete = document.getElementById("raquete_um");

    //Verifica se apertou a tecla W ou S
    if (evento.code == "KeyW"){
        //Sobe a raquete
        raquete.style.top = raquete.offsetTop - 1 + "px";
    } else if (evento.code == "KeyS") {
        //Desce a raquete
        raquete.style.top = (raquete_posicao.top +1) + "px";
    }
});
