// Usando export para ser possivel mandar os valores e as funções para outro arquivo

export const PI = 3.14

export function getCircumference(radius){
    return 2 * PI *  radius;
}

export function getArea(radius){
    return PI * radius * radius;
}