let frase = "Eu gosto de Lana Del Rey";

let contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (
        frase[i] === "a" ||
        frase[i] === "e" ||
        frase[i] === "i" ||
        frase[i] === "o" ||
        frase[i] === "u"
    ) {
        contador++;
    }
}

console.log(contador);

// Minha tentativa:
// 1. Criar uma frase.
// 2. Tentar percorrer as letras da frase.
// 3. Usar length para saber o tamanho da frase.
// 4. Criar um contador para contar as vogais.
// 5. Tive dificuldade para entender como pegar cada letra
//    e verificar se ela era uma vogal.
//
// Resolvi sozinho? não
// Travei na sintaxe ou no raciocínio? sintaxe e raciocínio
// Usei IA? Para entender como percorrer a frase,
// verificar cada letra e contar as vogais.