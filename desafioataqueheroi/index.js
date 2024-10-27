// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;   // Nome do herói
        this.idade = idade; // Idade do herói
        this.tipo = tipo;   // Tipo do herói
    }

    // Criando método para o ataque dentro da classe Heroi
    atacar() {
        let ataque; // Criando variável para armazenar a descrição do ataque

        // Definindo o tipo de ataque com base no tipo do herói
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usando magia';
                break;
            case 'guerreiro':
                ataque = 'usando espada';
                break;
            case 'monge':
                ataque = 'usando artes marciais';
                break;
            case 'ninja':
                ataque = 'usando shuriken';
                break;
            default:
                ataque = 'um ataque não conhecido'; // Caso o tipo do ataque do heroi não seja reconhecido. No caso estamos criando instâncias conhecidas onde não vai ser necessário retorno by default, mas achei importante praticar o que vimos em aula.
                break;
        }

        // Exibindo a mensagem do ataque
        console.log("O " + this.tipo + " atacou " + ataque + ".");
        console.log(`O ${this.tipo} atacou ${ataque}.`);  // Exibindo a mensagem com interpolação de strings para praticar.
    }
}

// Criando instâncias da classe Heroi
const mago = new Heroi('Gandolf', 95, 'mago');
const guerreiro = new Heroi('RoyMan', 30, 'guerreiro');
const monge = new Heroi('BruceLay', 50, 'monge');
const ninja = new Heroi('Charuto', 20, 'ninja');

// Chamando o método atacar para cada herói
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();