// Funcion log(n)
// Kevin Rodriguez - Grupo 4
// D-DS-6-1
export const log = (v1, v2) => {
    let resultado
    resultado = (Math.log(v2) / Math.log(v1)) 
    // Se utilizo la funcion nativa Math para calcular el logaritmo natural de v2 entre el logaritmo natural de v1
    // lo que da la respuesta de logaritmo en base x (en este caso v1) de n (en este caso v2).

    console.log(`El resultado de la operacion log${v1}(${v2}) = ${resultado}`)
    return resultado
}