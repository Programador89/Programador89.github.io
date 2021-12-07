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



var hotel = {}
hotel.name = "Copacabana Palace";
hotel.rooms = 60;
hotel.booked = 20;
hotel.available = function() {
    return this.rooms - this.booked;
};


//Um método de um objeto

function cadastroPessoal(nome, idade, sexo, nacionalidade) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.nacionalidade = nacionalidade;
}

var homem = new cadastroPessoal("Rafael Dantas", 32, "Masculino", "brasileiro");
var mulher = new cadastroPessoal("Larissa Sather", 29, "Feminino", "brasileira");


console.log(homem.nome);
console.log(mulher.nome);


//Arrays 

// informando os custos dos quartos de um hotel através de objeto: 
var hotelPensilvania = {
    quarto1: 420, 
    quarto2: 500, 
    quarto3: 420, 
    quarto4: 700
};

// informando os mesmso custos mas através de arrays: 
var hotelLasPalmas = [420, 500, 420, 700];

var room1 = {
    estadia: hotelLasPalmas[0]
};

console.log(`Valor do quarto selecionado R$${room1.estadia}`);