// Como cria uma funçao e igual verbo + subistantivo
//exemplos
//resetaCor 
//tranformaObjeto

// Cria função inicialmente colocaremos function e definimos o nome da função abrimos ()e{aqui dentro chamamos a variavel}
// para executa funçao basta coloca nome da funçao resetaCor(); no exemplo abaixo a variavel tinha um valor de cor azul chamamos a função e por ser uma variavel que pode ter seu valor alterado alteramos dentro da funçao para vazio atibuindo novo valor a ela chamamos a variavel no console log e vimos o valor azul no console apois pedi para a função roda e chamamos dnv o console.log vimos que ficou vazio a variavel

let corSite = "azul";
function resetaCor (){
    corSite = "";
};
console.log(corSite);
resetaCor();
console.log(corSite);

// novo exemplo com parametros em uma função
let siteCor = 'Preto';
function novaCor (cor){
    siteCor = cor;
};

console.log(siteCor);
novaCor("Amarelo");
console.log(siteCor);

// Repare que no exemplo acima quando chamamos a novaCor colocamos um parametro de cor dentro dele e atibuimos tambem abaixo na variavel que puxamos e na hora de chama a função definimos o oque ira ser determinado na variavel

// Exemplo com mais de um parametros utilizando +
let seuNome = "Anonimo";
function nomeSobre (primeiroNome,segundoNome){
    seuNome = primeiroNome + ' ' + segundoNome;
};

console.log(seuNome);
nomeSobre("Luiz", "Gustavo");
console.log(seuNome);

// como pode ver no seuNome utilizamos entre os + um espaço para que na hora que chamamos o console log nao fique junto pois essa ea maneira certa de da espaços em uma função