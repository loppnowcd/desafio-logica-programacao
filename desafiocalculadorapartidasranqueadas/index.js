// Criando função para calcular o saldo e determinar o nível do jogador. A função está sendo criada, mas não está sendo chamada até o momento.
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas; //Calculando o saldo
    
    let nivel;  // Define o nível com base na quantidade de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    
    return { saldoVitorias, nivel }; // Retornando um objeto com o saldo e o nível
}

// Solicitando a quantidade de vitórias e derrotas do jogador
const vitorias = parseInt(prompt("Digite o número de vitórias:"));
const derrotas = parseInt(prompt("Digite o número de derrotas:"));

// Chama a função e guarda o resultado
const resultado = calcularNivel(vitorias, derrotas);

// Exibe a mensagem final com saldo e nível
console.log("O Herói tem saldo de " + resultado.saldoVitorias + " e está no nível " + resultado.nivel + ".");
console.log(`O Herói tem saldo de ${resultado.saldoVitorias} e está no nível ${resultado.nivel}.`); // Exibindo o mesmo texto com interpolação de strings