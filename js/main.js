// //declaracion
// //let nombre;
// let apellido;
// let edad;
// let anio;
// //asignacion
// //nombre = "Jose";
// apellido = "Perez";
// edad = "33";
// anio = "1988";
// //console.log(nombre)
// console.log(apellido)
// console.log(edad)
// console.log(anio)


// //inicializar
// let mascota = "firulais"

// //const
// const PI=3.145123456
// const IVA=21
// const DNI=34228687

// let numero1= 34
// let numero2= 76
// let resultado= numero1 + numero2;
// let resta= numero1 - numero2;
// let multiplicar= numero1 * numero2;
// console.log(multiplicar)
// console.log(resta)
// console.log(resultado)

// //alert("hola")
// //let entrada= prompt ("Ingrese su nombre")
// //let mensaje="hola "
// //let bienvenida=" bienvenida!! ingrese su clave"
// //console.log(mensaje + entrada)
// //prompt (mensaje + entrada + bienvenida)

// //condicional
// //if (true){
// //console.log("pruebas del if")
// //}

// let numeroDePrueba= 10
// let esIgual= numeroDePrueba == 10
// console.log(esIgual)

// //if (numeroDePrueba == 10){
//     //console.log("esta transaccion puede realizarse correctamente")
// //}

// //let nombre = prompt ("ingresá tu nombre");
// //if (nombre == "")
//    // {
//    // alert("no puso ningun nombre");
// //}
// //else
//    // {
//    // alert("hola " + nombre);

    
// //}
// // let producto1 = 2.99;
// // if(producto1 < 20) {
// //     console.log("el precio es menor");
// // }
// // else if(producto1 >= 20){
// //     console.log("el precio es mayor");
// }
// let ingreso= parseInt (prompt("ingrese un numero"))
// for (i=0; i<=10; i= i+1){
//     let resultado= ingreso * i;
//     console.log(ingreso + "X" +i + "=" + resultado);
// }

/* let ingreso = prompt("ingrese producto");

while (ingreso != "salir"){
    
    console.log(ingreso);
    ingreso=prompt("ingrese producto")
} */

/* let ingresarNombre= prompt("ingresar nombre");
alert("hola " + ingresarNombre);
let ingresarNombre= prompt("ingresar nombre");
alert("hola " + ingresarNombre);
let ingresarNombre= prompt("ingresar nombre");
alert("hola " + ingresarNombre);
let ingresarNombre= prompt("ingresar nombre");
alert("hola " + ingresarNombre); */

//funciones declaración
/* function ingresarNombreFunction(){
//ejecucion
let ingresarNombre= prompt("ingresar nombre");
alert("hola " + ingresarNombre);
console.log(ingresarNombre);

} 

//llamado
/* ingresarNombre() */

//llamado muchas veces aprovechando for

/* for (let i = 0; i <=5; i++)  {
    ingresarNombreFunction();   */
    
/* } */ 

//con parametros
/* function conParametros(parametro1,parametro2) {
//ejecucion
console.log("hola "+ parametro1 + parametro2);
}
conParametros() */

//objetos

/* let nombre="homer"
let edad = 39
let calle="Av Siempreviva 742"

let persona={
    nombre:"homer",
    edad:39,
    calle:"Av Siempreviva 742",

}

let persona2={
    nombre:"marge",
    edad:38,
    calle:"Av Siempreviva 742",

}
persona.cabello="no tiene"
/* console.log(persona);
console.log(persona.nombre); */

//funcion constructora

/* function gorra1(tamanio, color, precio){
    this.tamanio = tamanio;
    this.color = color;
    this.precio = precio;
}

//para no crear muchos prompt que solicite 
//datos al usuario se crea una funcion
function ingresarDatos(params) {
    return prompt(params)
}

//aca se llama a la funcion de los prompt
let tamanio1= ingresarDatos("Ingrese un tamaño")
let color= ingresarDatos("Ingrese un color")


//aca se contruye el objeto
 persona = new gorra1(tamanio1, color, "$4000");
console.log(persona);

function carrito(tamanioGorra, colorGorra, precioGorra) {
    const carritoPersonalizado= new gorra1(tamanioGorra, precioGorra, precioGorra)
    return carrito
} */

//arrays

const numeros =[1,2,3,4,5]

console.log(numeros[0])