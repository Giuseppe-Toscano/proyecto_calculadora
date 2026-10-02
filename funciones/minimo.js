// GRUPO 3
// Giuseppe Toscano ---> MINIMO
// Kevin Rodriguez ----> log(n)
// D-DS-6-1

export function minimo(v1, v2){
    // declaracion de variable del minimo
    let resultado;

    // condicional if para verificar los valores entrantes
    if (v1<v2){
        resultado = v1;
    } else {
        resultado = v2;
    }
    return resultado;
}