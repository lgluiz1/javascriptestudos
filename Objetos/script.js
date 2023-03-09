let nome = 'Luiz';
let idade = 28;
let estaAprovado = true ;
let sobrenome = undefined;
let corSlecionado = null;

//Em JavaScript, um objeto é uma coleção de propriedades, onde cada propriedade é um par chave-valor. A chave é sempre uma string, e o valor pode ser de qualquer tipo de dados, incluindo outros objetos.

// Exemplo de como abri um objeto let pessoa = {};
// Para executa esse Objeto voce utilizar console.log(pessoa) no caso nome que vc atribuiu ao objeto
let pessoa = {
     nome : 'Luiz'
 };
 console.log(pessoa)

 // No seu console vc ira ver que ja foi indentificado que dentro do objeto pessoa tem uma variavel com nome de Luiz
 // Chama um objeto como um indentificado pessoal olha exemplo abaixo
 let novaPessoa = {
    nome : 'Luiz' ,
    idade : 28,
    estaAprovado: true,
    sobrenome: 'Gustavo'

 }
 console.log (novaPessoa)

 // Exercicios 
 let novoExercicio = {
    nome : 'Geraldo',
    idade : 58,
    estaAprovado : true,
    sobrenome : 'silva',
 }
 let aprovados = {
    nome : 'Hidan',
    idade: 25,
    estaAprovado : true,
    sobrenome : 'Farias'
 }
 console.log (novoExercicio , aprovados)