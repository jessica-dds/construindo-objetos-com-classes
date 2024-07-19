Desenvolvido durante o curso Full Stack da Cubos Academy.



______________________________________________

Classe Calculadora:

Implementação de uma classe Calculadora que contêm as seguintes funcionalidades:

- Somar
- Subtrair
- Multiplicar
- Dividir

A classe recebe em seu método construtor, dois argumentos numéricos que são manipulados por cada funcionalidade. Cada método retorna o resultado da operação entre os dois números.

Não é possível acessar os valores dos números informados no método construtor, após a criação do objeto.

______________________________________________

Classe Lâmpada:

Implementação de uma classe Lâmpada que, ao ser instanciada, recebe a sua potência em Watts.

A classe tem três funcionalidades:

- Ligar (altera o estado da lâmpada para true)
- Desligar (altera o estado da lâmpada para false)
- Medir Potência (retorna a potência da lâmpada em watts)

______________________________________________


Classe Fatura:


Implementação de  uma classe Fatura que é responsável por registrar todos os lançamentos de compras no cartão de crédito de um cliente específico.

Criando um novo objeto instanciando a classe Fatura, será necessário informar o nome do cliente responsável pela fatura.

A classe tem duas funcionalidades:

a) Registro do produto numa lista de transações, onde o produto tem o seguinte formato:

{
    descricao: 'Camisa Preta',
    valor: 5990,
    quantidade: 2
},
{
    descricao: 'Camisa Azul',
    valor: 7900,
    quantidade: 1
}

b) Fechar a fatura. Essa funcionalidade retorna o texto a seguir:

Cliente: João

2 - Camisa Preta (R$ 59,90) = R$ 119,80
1 - Camisa Azul (R$ 79,00) = R$ 79,00

Total: R$ 198,80

______________________________________________

Classe Pessoa: 

Implementação de uma classe Pessoa que contêm as seguintes características:

- nome
- idade
- nomePai
- nomeMae

A classe deverá possui as seguintes funcionalidades:

a) Verifica se uma outra pessoa são irmã(os). Uma pessoa é irmã(o) da outra se o nome do pai ou o nome da mae for o mesmo para ambos. Essa funcionalidade retorna apenas true ou false.

b) Verifica se é mais velha que outra pessoa. Uma pessoa é mais velha se a sua idade for maior que a da outra pessoa. Essa funcionalidade retorna apenas true ou false.

______________________________________________

Classe Correção de bugs

O código a seguir possui alguns erros que precisaram ser corrigidos. A tarefa foi analisar a estrutura, identificar o problema e corrigi-los.

class Empresa {
    constructor(
        nome: number,
        fantasia: string,
        cnpj: string,
        telefone: string
    ) {}

    get getNome(): string {
        return this.nome
    }

    get getFantasia(): string {
        return this.cnpj
    }

    get getCnpj(): string {
        return this.cnpj
    }

    get getTelefone(): string {
        this.telefone
    }

    set setFantasia(fantasia): string {
        this.fantasia = fantasia
    }
}

______________________________________________

Não foi necessário transpilar o código.
