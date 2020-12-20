$('.owl-carousel').owlCarousel({
    // CRIA O EFEITO INFINITO
    loop:true,
    //MARGENS
    margin:10,
    //BOTOES DE NAVEGACAO
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})