$(document).ready(function(){


  $(".after i").click(function(){

    //trovo l'immagine che ha la classe active
    var visibleImage = $("img.active");
    var nextImage = $(visibleImage).next("img");

    console.log(visibleImage);

    if(nextImage.length == 0){
      nextImage = $("img.first");

    }

    //rimuovo la classe active dall'immagine precedente
    $(visibleImage).removeClass("active");

    //assegno la classe active all'immagine successiva
    $(nextImage).addClass("active");


  });

  $(".before i").click(function(){

    var visibleImage = $("img.active");
    var previousImage = $(visibleImage).prev("img");

    if(previousImage.length == 0){
      previousImage = $("img.last");

    }
    //rimuovo la classe active dall'immagine precedente
    $(visibleImage).removeClass("active");

    //assegno la classe active all'immagine successiva
    $(previousImage).addClass("active");
  });

});
