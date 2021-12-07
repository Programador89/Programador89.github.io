// Criando objeto por Notação de Construtor 
var autores = new Object();

autores.nome = "J. R. R. Tolkien";
autores.anoNasc = 1892;
autores.anoFale = 1973;
autores.livros = 9;
autores.idade = autores.anoFale - autores.anoNasc;

console.log(`${autores.nome} foi um dos maiores escritores de todos os tempos. Nascido em ${autores.anoNasc} e falecido em ${autores.anoFale}, o escritor morreu com ${autores.idade} anos, deixando incríveis ${autores.livros} obras.`);


//Criando um objeto com propriedades e métodos

function escritor(nome, anoNascimento, anoFalescimento, obras){
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.anoFalescimento = anoFalescimento;
    this.obras = obras;

    this.idade = function() {
        return this.anoFalescimento - this.anoNascimento;
    };
}

var escritorTolkien = new escritor("J. R. R. Tolkien", 1892, 1973, 9);

console.log(`${escritorTolkien.nome} possui ${escritorTolkien.idade(this.anoFalescimento, this.anoNascimento)} anos.`);