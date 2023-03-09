//let no exemplo abaixo o let foi atribuidor no valor inicial de 20 mais por nao ser uma constante o valor dele pode ser manupulado como foi feito 
// na linha abaixo com o nome da variavel e com alteraçao para 30 ao da cosole.log(valorIngressoAdulto) você recebera o novo valor atribuirdo q e 30


let valorIngressoAdulto = 20;
valorIngressoAdulto = 30
console.log(valorIngressoAdulto)


// Ao utiliza const ao contrario de let ele nao pode ser manipulado igual exemplo acima ele tem valor unico com isso 
// Ao declara uma variavel const o valor dela sera sempre o valor determinado sem condições de alteração 
// Ao manda o console.log(nomedavariavelcont) vera o erro em seu console "Uncaught TypeError: Assignment to constant variable."
// Informando que essa variavel nao pode TypeError não detectado: atribuição à variável constante
const valorIngressoCrianca = 15;
valorIngressoCrianca = 20; // so utilizar const quando voce tiver valores que nao precisa ser redefinidos 
console.log(valorIngressoCrianca)

// caso for altera valores utilizer let 