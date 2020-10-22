let multiplo = () => {

    let suma = 0;
    for (let i = 1; i < 10000; i++) {

        if ((i % 3) == 0 || (i % 5) == 0 || (i % 7) == 0) {
            suma += i;
        }
    }
    console.log(`La suma es: ${suma} `);
}

multiplo();