// Ejercicio 2: Exportar funciones matematicas

import { PI } from "./constantes.js"

export function sumar(a,b){
    return a+b
}

export function restar(a,b){
    return a-b
}

export function multiplicar(a,b){
    return a*b
}

export function areaCirculo (radio){
    return radio*radio*PI
}

// Ejercicio 3: Calculadora de Impoestos

import { IVA, DESCUENTO } from "./constantes.js"

export function calcularTotal(precio, cantidad){
    return precio*cantidad
}

export function aplicarImpuestos(total) {
    return total*IVA
}

export function aplicarDescuento(total) {
    return total*DESCUENTO
}

// Ejercicio 5: Sistema de descuentos por rol

export function aplicarDescuentoPorRol(total, usuario){
    if (usuario === 'admin') return total*0.8
    else if (usuario === 'cliente') return total-(total*DESCUENTO)
}

