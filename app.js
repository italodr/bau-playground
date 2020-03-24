/*
 Ejemplo específico para obtener el idioma del navegador y hacer una redirección
 a la carpeta del idioma
*/
var userLang = navigator.language || navigator.userLanguage;
userLang = userLang.split('-')[0];

/*
 He comentado las siguientes líneas para que no se les ejecute el código y les
 salte a la carpeta de idioma
*/

// console.log('The language is: ' + userLang);
// console.log(window.location);

// if (window.location.pathname.indexOf('/' + userLang + '/') < 0) {
//     window.location.href = userLang + '/index.html';
// }

/******************************/

/*
 Función para añadir/eliminar una clase al elemento `html` y poder controlar
 la apertura y cierre de la navegación por CSS
*/
$('.menu').on('click', function() {
    $('html').toggleClass('menu-open');
});

/*
 Función para hacer el smooth scroll a un elemento del HTML
*/
$('.js-anchor').on('click', function(event) {
    // previene la función (por defecto) de un elemento
    event.preventDefault();
    /*
     Obtenemos el atributo `href` del elemento clicado `$(this)` que coincide
     con el ID del elemento al que queremos hacer scroll.
     De esta manera lo hacemos dinámicamente y no tenemos que añadir varias
     líneas de código por cada link que utilicemos. Es mucho MÁS óptimo.
    */
    var target = $(this).attr('href');

    // cerramos el menu, eliminando la clase del `html`
    $('html').removeClass('menu-open');

    /*
     Hacemos la animación de la página al inicio del elemento seleccionado y que
     hemos guardado en la variable `target` en la línea 32

     La función `offset()` de jquery nos da las coordenadas de la posición de un
     elemento dentro del HTML (top, right, bottom, left), en nuestro caso, solo
     necesitamos el `top` en la línea 60

     Como segundo parámetro de la función `animate()` de jquery, pasamos la
     velocidad con la que hará la animación, en milisegundos, línea 62
    */
    $('html, body').animate(
        {
            scrollTop: $(target).offset().top
        },
        1500
    );
});

/*
 Configuración inicial y básica del swiper slider
*/
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination'
    }
});
