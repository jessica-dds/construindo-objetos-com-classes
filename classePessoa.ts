class Pessoa {
    constructor(
        private nome: string,
        private idade: number,
        private nomePai: string,
        private nomeMae: string,
    ) { }

    irmaos(pessoa: Pessoa): boolean {
        return this.nomePai === pessoa.nomePai || this.nomeMae === pessoa.nomeMae
    }

    maisVelha(pessoa: Pessoa): boolean {
        return this.idade > pessoa.idade
    }
}

const jessica = new Pessoa('Jéssica', 35, 'João', 'Maria');
const mirian = new Pessoa('Mirian', 32, 'José', 'Maria');

console.log(jessica.irmaos(mirian));
console.log(jessica.maisVelha(mirian));