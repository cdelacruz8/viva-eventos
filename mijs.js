// MOSTRAR CAMPO OCULTO CUANDO SELECCIONAS OTROS

$('#slc-type-of-party').change(function() {//.change me indica cambio en cualquier valor
    var _elem = $(this); // var _elem obtiene el objeto completo, incluye los hijos(option) ('.slc-type-of-party')
    var _button_hidden = $('#boton-oculto'); // var _button_hidden obtiene los elementos con el id boton-oculto
  if(_elem.val() === 'other_party'){
  	_button_hidden.show();
  }else{
  	_button_hidden.hide();
  }
});

// OCULTAR Y MOSTRAR INPUT CON FUNCION.

function ocultar() {
    $('#nl').hide(1000);
};

function mostrar() {
    $('#nl').show(1000);
};

// FUNCION DATETIMEPICKER

$(function () {
    $('#fechainicio').datetimepicker();
});
$(function () {
    $('#fechafin').datetimepicker();
});

// JUEGOS!!!

//JUEGO ADIVINA EL NUMERO
var resAleatorio = Math.floor((Math.random() * (10 - 1 + 1)) + 1);
function aleatorio() {
    var numero = prompt('Digita numero');
    if (isNaN(numero)) {
        alert('Ingresaste la palabra: ' + numero + '. Recuarda que solo puedes ingresar numeros!');
    }
    if (resAleatorio > numero) {
        alert('El numero ingresado es muy bajo!');
        return aleatorio();
    } if (resAleatorio < numero) {
        alert('El numero ingresado es muy alto!')
        return aleatorio();
    }
    if (resAleatorio == numero) {
        alert('Aro cachon! El numero es: ' + numero);
    }
    resAleatorio = Math.floor((Math.random() * (10 - 1 + 1)) + 1);
};

function jugarsuma() {
    var num1;
    var num2;
    function numero1() {
        num1 = Number(prompt('Ingrese el Numero1'));
        if (num1 == null || num1 == '' || isNaN(num1)) {
            alert('Hey, Ingresaste un valor invalido cachon!');
            return numero1()
        }
    };
    numero1();
    function numero2() {
        num2 = Number(prompt('Ingrese el Numero2'));
        if (num2 == null || num2 == '' || isNaN(num2)) {
            alert('Hey cachon! estas metiendo mal el numero ombe!');
            return numero2();
        }
    };
    numero2();
    alert('La suma es: ' + (num1 + num2));
};

function jugarresta() {
    var num1;
    var num2;
    function numero1() {
        num1 = Number(prompt('Ingrese el Numero1'));
        if (num1 == null || num1 == '' || isNaN(num1)) {
            alert('Hey, Ingresaste un valor invalido cachon!');
            return numero1()
        }
    };
    numero1();
    function numero2() {
        num2 = Number(prompt('Ingrese el Numero2'));
        if (num2 == null || num2 == '' || isNaN(num2)) {
            alert('Hey cachon! estas metiendo mal el numero ombe!');
            return numero2();
        }
    };
    numero2();
    alert('La suma es: ' + (num1 - num2));
};

function jugarmultiplicacion() {
    var num1;
    var num2;
    function numero1() {
        num1 = Number(prompt('Ingrese el Numero1'));
        if (num1 == null || num1 == '' || isNaN(num1)) {
            alert('Hey, Ingresaste un valor invalido cachon!');
            return numero1()
        }
    };
    numero1();
    function numero2() {
        num2 = Number(prompt('Ingrese el Numero2'));
        if (num2 == null || num2 == '' || isNaN(num2)) {
            alert('Hey cachon! estas metiendo mal el numero ombe!');
            return numero2();
        }
    };
    numero2();
    alert('La suma es: ' + (num1 * num2));
};

