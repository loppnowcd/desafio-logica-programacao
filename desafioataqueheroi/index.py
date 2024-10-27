# Definindo a classe Heroi
class Heroi:
    def __init__(self, nome, idade, tipo):
        self.nome = nome   # Nome do herói
        self.idade = idade # Idade do herói
        self.tipo = tipo   # Tipo do herói

    # Criando método para o ataque dentro da classe Heroi
    def atacar(self):
        # Definindo o tipo de ataque com base no tipo do herói
        if self.tipo.lower() == 'mago':
            ataque = 'usando magia'
        elif self.tipo.lower() == 'guerreiro':
            ataque = 'usando espada'
        elif self.tipo.lower() == 'monge':
            ataque = 'usando artes marciais'
        elif self.tipo.lower() == 'ninja':
            ataque = 'usando shuriken'
        else:
            ataque = 'um ataque não conhecido'  # Caso o tipo do ataque do herói não seja reconhecido

        # Exibindo a mensagem do ataque
        print(f"O {self.tipo} atacou {ataque}.")  # Usando f-strings para formatação

# Criando instâncias da classe Heroi
mago = Heroi('Gandolf', 95, 'mago')
guerreiro = Heroi('RoyMan', 30, 'guerreiro')
monge = Heroi('BruceLay', 50, 'monge')
ninja = Heroi('Charuto', 20, 'ninja')

# Chamando o método atacar para cada herói
mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()
