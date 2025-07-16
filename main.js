import {PI,IVA, DIAS_SEMANA} from "./constantes.js"

console.log("-------------------------------------------------------")
console.log("Ejercicio 1: Archivo Constantes")
//Ejercicio 1: Archivo Constantes

function area (radio){
    return radio*radio*PI
}

function precioConIVA (precio) {
    return precio*IVA+precio
}

console.log(`El area del circulo es: `,area(5))
console.log("Precio + IVA: ",precioConIVA(100))
console.log("El tercer dia de la semana es:",DIAS_SEMANA[2])

console.log("-------------------------------------------------------")
console.log("Ejercicio 2: Exportar funciones matematicas")
// Ejercicio 2: Exportar funciones matematicas

import { sumar,restar,multiplicar,areaCirculo } from "./operaciones-matematicas.js"

console.log("Suma: ",sumar(5,4))
console.log("Resta: ",restar(5,4))
console.log("Multiplicacion: ",multiplicar(5,4))
console.log("Area: ",areaCirculo(5,4))

console.log("-------------------------------------------------------")
console.log("Ejercicio 3: Calculadora de Impuestos")
// Ejercicio 3: Calculadora de Impuestos
import { calcularTotal, aplicarDescuento, aplicarImpuestos } from "./operaciones-matematicas.js"

let precioProducto = 450

console.log("El total es: ", calcularTotal(precioProducto,3))
console.log("Iva: ", aplicarImpuestos(calcularTotal(precioProducto,3)))
console.log("Descuento: ", aplicarDescuento(calcularTotal(precioProducto,3)))

console.log("-------------------------------------------------------")
console.log("Ejercicio 4: Gestion de Usuarios")
// Ejercicio 4: Gestion de Usuarios

import { ROLES } from "./usuariosConstantes.js"
import {crearUsuario} from "./usuarios.js"

console.log(crearUsuario("Pedro", ROLES.ADMIN))
console.log(crearUsuario("Carlos", ROLES.CLIENTE))

console.log("-------------------------------------------------------")
console.log("Ejercicio 5: Sistema de descuentos por rol")
// Ejercicio 5: Sistema de descuentos por rol

import { aplicarDescuentoPorRol } from "./operaciones-matematicas.js"

let productosAdmin = 25
let productosCliente = 50

console.log("Total productos Admin: ", calcularTotal(productosAdmin,4))
console.log("Total productos Cliente: ", calcularTotal(productosCliente,3))

console.log("Iva Admin: ", aplicarImpuestos(calcularTotal(productosAdmin,4)))
console.log("Iva Cliente: ", aplicarImpuestos(calcularTotal(productosCliente,3)))

console.log("Descuento para Admin: ",aplicarDescuentoPorRol(calcularTotal(productosAdmin,4),'admin'))
console.log("Descuento para Cliente: ",aplicarDescuentoPorRol(calcularTotal(productosCliente,3),'cliente'))