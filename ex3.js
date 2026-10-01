for (let numero = 1; numero <= 30; numero++) {

    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("FizzBuzz");

    } else if (numero % 3 === 0) {
        console.log("Fizz");

    } else if (numero % 5 === 0) {
        console.log("Buzz");

    } else {
        console.log(numero);
    }
}

// Minha tentativa:
// Tentei criar um for para passar pelos números de 1 até 30.
// Tentei verificar os múltiplos de 3 e 5 usando %.
// Tive dificuldade para montar a estrutura do for e dos ifs.
//
// Resolvi sozinho? não
// Travei na sintaxe ou no raciocínio? sintaxe e organização da lógica
// Usei IA? Para corrigir a sintaxe e entender a ordem das condições.