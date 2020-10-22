let capicua = (palabra) => {
    let letras = Array.from(palabra);
    let hasta = letras.length - 1;
    let desde = 0;
    let salir = false;

    while (!salir && desde < hasta) {
        if (letras[desde] === letras[hasta]) {
            desde++;
            hasta--;
        } else {
            salir = true;
        }

    }

    if (!salir) {
        return true;
    }

    return false;

}


let verificar = () => {
    let mayorMulti = 0;
    for (let i = 999; i > 0; i--) {
        for (let j = 999; j > 0; j--) {
            let multi = i * j;
            let cadena = Array.from(multi.toString());
            if (capicua(cadena)) {
                if (multi > mayorMulti) {
                    mayorMulti = multi;
                }
            }
        }
    }
    return mayorMulti;
}

console.log(`Mayor número: ${verificar()}`);