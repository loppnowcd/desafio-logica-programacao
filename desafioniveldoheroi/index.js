// Solicitando o nome do heroi
const nomeDoHeroi = prompt("Qual é o nome do seu herói?");

// Solicitando o nível do heroi
const experienciaDoHeroiInput = prompt("Qual é o nível do seu herói?");
const experienciaDoHeroi = parseInt(experienciaDoHeroiInput); // Convertendo a resposta para um número inteiro

// Inicializando a variável nivel
let nivel

if (experienciaDoHeroi < 1000) {
    nivel = "Ferro";
} else if (experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000) {
    nivel = "Bronze";
} else if (experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000) {
    nivel = "Prata";
} else if (experienciaDoHeroi >= 5001 && experienciaDoHeroi <= 7000) {
    nivel = "Ouro";
} else if (experienciaDoHeroi >= 7001 && experienciaDoHeroi <= 8000) {
    nivel = "Platina";
} else if (experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000) {
    nivel = "Ascendente";
} else if (experienciaDoHeroi >= 9001 && experienciaDoHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibindo a mensagem final
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel + ".");
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivel}.`); // Exibindo o mesmo texto com interpoção de strings