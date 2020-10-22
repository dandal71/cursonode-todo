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


console.log(capicua("oso"));