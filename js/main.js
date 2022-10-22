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

/* const numeros =[1,2,3,4,5]
const nombres =["juan", "luis","emiliano", "johana"]
//console.log(nombres[2]);
//console.log(numeros[0])
console.log(numeros);

/* for (let index = 0; index < 5; index++) {
    console.log(numeros[index]);
    
}
 */
//metodo push agrega elementos al final
/* numeros.push(6,7)
console.log(numeros);

//metodo pop quitar elementos
numeros.pop()
console.log(numeros);

//metodos shift, splice, join, slice
//join:

console.log(nombres.join(", "));

//metodo concat
const nuevaArray=numeros.concat(nombres)
console.log(nuevaArray); */ 

//funciones de orden superior
/* let numeros=[1,2,3,4,5,6,7,8,9]

function porCadaUno(arr, fn) {
    for (const elemento of arr){
        fn(elemento)

    }
}

let duplicado=[]
porCadaUno(numeros,(el)=>{
    duplicado.push(el*2);
});
console.log(duplicado);
//porCadaUno(numeros,console.log) */

//forEach
/* let numeros=[1,2,3,4,5,6,7,8,9]
numeros.forEach((num)=>{
    console.log(num*2);
})

//filter

const cursos=[
    {id:2, nombre: "javaScript", precio: 1500},
    {id:3, nombre:"javaScript", precio:3500},
    {id:4, nombre:"react", precio: 4600},
    {id:5, nombre: "reactJs", precio: 8750},
    ];


const resultado=cursos.filter((el)=> el.nombre.includes("Js"))
console.log(resultado);

const resultado2=cursos.filter((el)=> el.precio > 2500)
console.log(resultado2); */

//map

//math
//console.log(Math)

//dom y eventos. Los ID (#...) son ID en el html
document.title = "clase 9 | comision 30400";
const titulo1 = document.querySelector(".titulo span"),
    titulo2 = document.querySelector("h2");
titulo1.innerText = "clase 9";
titulo2.innerText = "eventos en JS";
const contador = document.querySelector("#contador"),
btnMas= document.querySelector("#aumentar"),
btnMenos= document.querySelector("#disminuir");