$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria(){
    $("#spinner").show();
    $("#info").hide();
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle()
        setTimeout(function(){
            $("#erro").toggle();
        }, 2500);
    })
    .always(function(){
        $("#spinner").toggle();
        $("#info").toggle();
    });
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo)
}

function buscaFrase(){
    $("#spinner").show();
    $("#info").hide();
    var fraseId = $("#frase-id").val();
    var dados = { id: fraseId };
    $.get("http://localhost:3000/frases",dados,trocaFrase)
    .fail(function(){
        $("#erro").toggle()
        setTimeout(function(){
            $("#erro").toggle();
        }, 2500);
    })
    .always(function(){
        $("#spinner").toggle();
        $("#info").toggle();
    })
}

function trocaFrase(data){
    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}