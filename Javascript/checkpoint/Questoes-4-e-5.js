//Exercicio 4
alert('Olá,tudo bem?')
    
let teste = confirm('Posso te fazer algumas perguntas?')
console.log('Resultado da caixa confirm:', teste)

let idade = 19
let texto = prompt('Quantos anos você tem?')
console.log('Vocé é:', idade)

if(idade <= 12){
    document.write('Uma criança')

}else if(idade <= 18 ){
    document.write('Um adolescente')

}else if(idade <= 60){
    document.write('Um adulto')

}else if(idade => 60){
    document.write('Idoso')
}

//Exercicio 5
const username = prompt("Digite seu nome de usuário:");
const password = prompt("Digite sua senha:");

if (username === "admin" && password === "1234") {
  console.log("Login realizado com sucesso!");

} else {
  console.log("Falha na autenticação. Usuário ou senha incorretos.");
}

//EXERCICIO 8
let frase = "O LUGAR VIRA TECNOLOGIA";
let novaFrase = frase.replace("LUGAR", "MUNDO");
console.log(novaFrase);

//EXERCICIO 9
let numString = "3.14159";
let numFloat = parseFloat(numString);
let numFormatado = numFloat.toFixed(2);
console.log(numFormatado);