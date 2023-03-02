console.log("jugando un poco con datos en JS")
console.log("hola mundo")
let miDatoPrincipal = "bille"
let miOtroDato = 123
const miObjeto = {
    loQeSea: 127,
    datoLoco: "Soy sabalero",
    condicion: true,

}
console.log(miDatoPrincipal,miOtroDato,miObjeto)

const arr = ["faltan", 5, "pe", ]
const arrVacio = []

console.log(arr, arrVacio)

arrVacio.push("no estoy mas vacio")

console.log(arrVacio)

console.log("Operadores")

//const suma = 20 + 41
const resta = 66 - 87
const multiplicador = 5 * 71
const division= 5 / 125

//console.log("la suma es", " ",suma)
console.log("la resta es", " ", resta)
console.log("la multiplicacion es", " ", multiplicador)
console.log("la division es", " ",division)

const modulo = 10 % 3

console.log ("el resto de la division es:", " ",modulo)

// ++ para incrementar valor se utiliza let ej:
// -- al disminuir el valor igual.
// += para asignar a la variable
//-= para restar la variable
// /= para dividir la variable

let incrementar = 5
incrementar++
incrementar++
incrementar++
incrementar++
incrementar++
incrementar++

// si utilizo const no se va a poder ya que las constantes no se pueden cambiar de valor.

console.log(incrementar)



console.log("operadores de comparacion")

//igual estricto

const result = 4 === 5

// igual

const result1 = 4 == 5

// menor

const result2 = 4 < 5

// mayor

const result3 = 5 > 4

// menor-igual

const result4 = 4 <= 5 & 5 <= 5

// mayor-igual

const result5 = 4 >= 5 & 5 >= 5

// desigualdad estricta

const result6 = 6 !== "6"

// desigualdad

const result7 = 7 != 7

// al ser operador de comparacion me va a devolver true o false dependioendo la comparacion

// en todos los ope logicos los valores se evaluan en true o no ser que sea 0

const opLog = false || false

// operador or || siempre busca true; buscan siempre el valor que corte la operacion asi como un "hola"

const opLog1 = true && false

// operador and && siempre busca el false; buscan siempre el valor que corte la operacion asi como un "hola"


const opLog2 = !true

// operador not ! da vuelta el valor 


// control de flujo 
//if-else

const edad = 12

if (edad >5 & edad < 18){
    console.log("tiene permitido jugar")
} else {
    console.log("lo lamento pero no puede jugar :(")
}

//while
let x = 0
while (x < 5) {
    console.log(x)
x++
}

console.log("se termino el mientras")

//switch
switch(2) {
    case 1: console.log("soy caso 1")
    break;
        case 2:console.log("nose")
        break;
            case 3:console.log("tampoco se")
            break;
                default:console.log("si no sabe se termina aca")
                break;
}

//for

for (let i = 0 ; i < 10; i++){
console.log(i)    
}

// Acceso al manejo de arreglos

const num = [1,2,3,4,5]

// num.lenght accede al largo del arreglo 01234

for (let i = 0 ; i < num.length ; i++){
    console.log(num[i])    //accede al valor de los arrglos
    }


// function

function iterar(arg1) {
    for (let i = 0 ; i < arg1.length ; i++){
        console.log(arg1[i])    //accede al valor de los arrglos
        }
}
const num1 = [1,2,3,4,5]
const nom = ["carlos","sofia","rocio","juan","jose"]

iterar(num1)
iterar(nom)

//return

function suma (a, b){
    return (a + b)
}

const resultado = suma(7, 10)

// callback

function sumar(a,b,cb){
    const r = a + b
    cb(r)
}

function callback(result){
    console.log("resultado", result)
}

sumar (2, 3, callback)

// fat arrow

const miFatArrowFunction = (a, b) => a+b
const otraFAF=(a, b) => {
    return a + b
}
const rr = otraFAF(1, 2)
console.log(r);