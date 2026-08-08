function irPara(id) {

    const elemento = document.getElementById(id);

    if (elemento) {

        elemento.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* CONTADOR DO NAMORO */

function atualizarContador() {

    const inicio = new Date("2024-08-09T00:00:00");

    const agora = new Date();

    const diferenca = agora - inicio;

    if (diferenca < 0) {
        return;
    }


    const segundosTotais =
        Math.floor(diferenca / 1000);


    const dias =
        Math.floor(
            segundosTotais / 86400
        );


    const horas =
        Math.floor(
            (segundosTotais % 86400) / 3600
        );


    const minutos =
        Math.floor(
            (segundosTotais % 3600) / 60
        );


    const segundos =
        segundosTotais % 60;


    document.getElementById("dias").textContent =
        dias;


    document.getElementById("horas").textContent =
        horas;


    document.getElementById("minutos").textContent =
        minutos;


    document.getElementById("segundos").textContent =
        segundos;

}


setInterval(
    atualizarContador,
    1000
);


atualizarContador();


/* FUTURA CARTA */

function abrirCarta() {

    /*
    Quando você criar a segunda página,
    coloque ela como:

    carta.html

    na mesma pasta do index.html.
    */

    window.location.href = "carta.html";

}