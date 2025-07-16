// Ejercicio 4: Gestion de Usuarios

export function crearUsuario(nombre,rol){
    return {
        'nombre': nombre,
        'rol': rol,
        'fechaRegistro': new Date()
    }
}