// class Pessoa {
//     nome: string
//     idade: number

//     constructor(nome: string, idade: number) {

//     }
// }


class Pessoa {
    constructor(
        public nome: string,
        public idade: number
    ) { }
}

const jessica = new Pessoa('Jéssica', 35)
const guilherme = new Pessoa('Guilherme', 35)
const joaquim = new Pessoa('Joaquim', 35)
const bruno = new Pessoa('Bruno', 35)
jessica.nome = "Jel"


console.log(jessica, guilherme, joaquim, bruno);
