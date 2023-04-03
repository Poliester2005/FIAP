//substituir texto 

let texto = 'Estão chegando as provas'

console.log(texto.replace('provas', 'avaliações'))

let num = 233.45555
console.log(num.toFixed(2))

//Alert caixa

// alert("Olá meu amigo(a)")

//caixa de confirmação

let test = confirm("Você é um aluno?")

console.log(test)

//caixa de prompt

let text = prompt("Digite seu nome")

console.log("O nome é:", text)

document.write(text , '<br>')

if(20>10){
    document.write("20 é maior ")
}

//if else

if (25 > 15){
    document.write("25 é maior <br>")
}
else{
    document.write("25 é menor <br>")
}

//if else declarando variavel

let numero = 18

if (numero > 18){
    document.write("O numero ", numero , " é maior <br>")
}
else{
    document.write("O numero ", numero , " é menor <br>")
}

//if declarando variavel

let idade = parseInt(prompt("Insira sua idade"))

if (idade <= 12){
    document.write("Você é uma criança")
}
else if (idade <= 17){
    document.write("Você é um adolescente")
}
else if (idade <= 30){
    document.write("Você é um adulto")
}
else{
    document.write("Você é um idoso")
}

let wow = prompt("Give me your idade")

if (wow >= 18){
    document.write("Você é maior de idade")
}
else {
    document.write("Você é menor de idade")
}

