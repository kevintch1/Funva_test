//INICIANDO EL PROGRAMA DE FUNVAL
/* COMENTARIOS EN VARIAS
LINEAS
SIUU */
console.log("HOLA FUNVAL KEVINCHOTECH"); //IMRPRIMIR COSAS EN LA CONSOLA
//--------------------------------------
//          TIPOS DE DATOS
let edad: number = 32; // dates numericos y decimal de 16 bytes
let apPaterno: string = "trocheck@gmail.com"; // valor tipo string
let salva: boolean = false;
let resultado: null = null;
let noDefinido: undefined;
let numerGigante: bigint = 123456789123456n;
let idUnico: symbol = Symbol("id");

//EXCLUSIVPS DE TYPESCRIPT
let comodin: any = "texto plano";
comodin = 32;
comodin = true; //any sirve para darle cualqier tipo de dato, no usa , solo por un caso muy especifico se podra usar

let dato: unknown = "mensaje"; // esta es mas segura , pque any
let vacio: void; // hace re    ferencia donde no va retornar nada

// aprender a crear variables y constantes
let telefono = "samsung";
telefono = "Xioami";


//varibales se pueden reaginar mas no cambiar el tipo de dato
let superHeroe = "Spiderman";
superHeroe = "Batman";
superHeroe = "At man";

//constantes no se pueden reagsinar
const pi = 3.1416;
//ADVERTENCIA!!!!!!!!!
var prohibido = "NO USAR";
////-----simbolo de operacion
//+
let nombreCompleto = "Kevin" + " " + "Rodriguez";
console.log(nombreCompleto);
let a = 2;
let b = 4;
let superResultado = a + b;
//suma
superResultado = a - b;
//ressta
superResultado = a + b;
// multiplicacion
superResultado = a * b;
//divicion
superResultado = a / b;
//modulo
superResultado = a % b;
//potencia ELEVANDO A N
superResultado = a ** b;


console.log(superResultado);

//simbolos de comparacion siempre retorna un boolean
let comparacion = a == b;
comparacion = a != b;
comparacion = a > b;
comparacion = a < b;
comparacion = a >= b;
comparacion = a <= b;

//simbolos de autoasignacion
let random = 2;
random++;// random = random + 1
random++;// random = random + 1
random--;//random = random -  1
random += 5;//random = random + 5
random -= 5;//random = random - 5
random *= 5;//random = random * 5
random /= 5;//random = random / 5
random %= 5;//random = random 5 5

//operadores logicos
let comparacionn = a == b && b < 4;// AND=&&
comparacionn = a == b || b < 4;// OR=||
comparacionn = !(a == b);// NEGACION =!
//---------------------------
let estudiante = "Esdras Blanco"
let nota1 = 90;
let nota2 = 75;
let nota3 = 5;

let promedio = (nota1 + nota2 + nota3) / 3;
console.log("el estudiante " + estudiante + " Tiene un promedio de " + promedio);

/*
mi amigo pepe tiene un taller de automotriz y un parqueo de vehiculos
el cobra * hora 20$ el quiere saber cuanto debera corbrar a un vehiculo que 
se queda una cantidad n de horas
*/

const tarifa: number = 20;
let n: number = 3
let cobroTarif: number = tarifa * n;
console.log("cobro por hora Total: " + cobroTarif);



/*

git init

git add
 git commit  -m "first commit
 
 git push origin master

 git config --global user.name "Tu Nombre"

 git config --global user.email "aqui va tu correo"