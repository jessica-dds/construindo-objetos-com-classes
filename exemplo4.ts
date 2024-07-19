class Pessoa {
    private nome: string
    private sobrenome: string
    private idade: number
    private velocidae = 0


    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }

    private nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }

    public andar() {
        this.velocidae += 1
    }

    public get getIdade(): number {
        return this.idade
    }
    public set setIdade(idade: number) {
        this.idade = idade
    }

    public get getNome(): string {
        return this.nomeCompleto()
    }
}

const jessica = new Pessoa('Jéssica', 'Gleizer', 35)
jessica.getIdade
jessica.setIdade = 36

console.log(jessica.getNome)
