/* 1.2.3 Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios. */
let Nombre = "Pedro";
let Apellido = "Perez"
let Nombre_de_usuario_en_ESPE = "pvperez"
let Edad = 21
let Correo_electrónico = "String"
let Mayor_de_edad = true
let Dinero_ahorrado = 400.25
let Deudas = 200.50

/* 1.2.4 Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior: 
•	Nombre completo (nombre y apellido)
•	Dinero real (dinero ahorrado menos deudas)
*/

let dineroReal;

console.log(Nombre + " " + Apellido);

dineroReal = Dinero_ahorrado - Deudas;

console.log(dineroReal);

/* 1.3.2 Convierte el siguiente código en una función, pero, cambiando cuando sea necesario 
las variables constantes por parámetros y argumentos en una función:
 */
const name = "Diego Medardo";
const lastname = "Saavedra García";
const nickname = "statick";

function presentar() {

    const completeName = name + lastname;
    console.log("Mi nombre es "
        + completeName
        + ", pero prefiero que me digas "
        + nickname + ".");
}

presentar();

/* 1.4.2 Replica el comportamiento del siguiente código que usa la sentencia 
switch utilizando if, else y else if: */

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free")
    console.log("Solo puedes tomar los cursos gratis");
else if (tipoDeSuscripcion == "Basic")
    console.log("Puedes tomar casi todos los cursos de ESPE durante un mes");
else if (tipoDeSuscripcion == "Expert")
    console.log("Puedes tomar casi todos los cursos de ESPE durante un mes");
else if (tipoDeSuscripcion == "ExpertPlus")
    console.log("Puedes tomar casi todos los cursos de ESPE durante un mes");


/* 1.4.3 Replica el comportamiento de tu condicional anterior con if, else y else if, 
pero ahora solo con if (sin else ni else if). */

const array = ["Free", "Basic", "Expert", "ExpertPlus"];
const argumentos = ["Solo puedes tomar los cursos gratis", 
                    "Puedes tomar casi todos los cursos de ESPE durante un mes", 
                    "Puedes tomar casi todos los cursos de ESPE durante un mes", 
                    "Puedes tomar casi todos los cursos de ESPE durante un mes"];

const tipoDeSuscripcionArray = "Basic";

for (i = 0; i < tipoDeSuscripcionArray.length; i++) {
    if (array[i] == tipoDeSuscripcionArray)
        console.log(argumentos[i]);
}

/* 1.5.2 Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) { 
console.log("El valor de i es: " + i); 
}*/

let i1 = 0;

while (i1 < 5) {
    console.log("El valor de i es: " + i1);
    i1++;
}

/*
for (let i = 10; i >= 2; i--) { 
console.log("El valor de i es: " + i); 
}*/


let i2 = 10;

while (i2 >= 2) {
    console.log("El valor de i es: " + i2);
    i2--
}

/* 1.5.3 Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. 
Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar. */

let valor = prompt("¿cuánto es 2 + 2?");
valor = parseFloat(valor);

function comprobar(valor) {
    if (valor == 4)
        console.log("Respuesta correcta");
    else {
        valor = prompt("¿cuánto es 2 + 2?");
        comprobar(valor);
    }
}

comprobar(valor);


/* 1.6.2 Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento. */

let frutas = ["manzana", "plátano", "naranja", "uva", "sandía"];
imprimir(frutas);

function imprimir(frutas){
    console.log(frutas[0])
}

/* 1.6.3 Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno 
por uno (no se vale imprimir el array completo). */

let paises = ["Estados Unidos", "China", "India", "Brasil", "Rusia"];
imprimirPaises(paises);

function imprimirPaises(paises){
    for(i = 0; i < paises.length; i++)
    console.log(i + ". " + paises[i]);
}

/* 1.6.4 Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno 
por uno (no se vale imprimir el objeto completo). */

let objeto = {
    Ecuador: "Quito",
    Colombia: "Bogota",
    Peru: "Lima",
    Chile: "Santiago",
    Argentina: "Buenos Aires"
}

imprimirObjeto(objeto);

function imprimirObjeto(objeto){
    for(let capitales in objeto){
        console.log(capitales + " : " + objeto[capitales]);
    }
}
