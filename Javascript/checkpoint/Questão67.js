// 6) Vamos criar um programa que calcule a media de 7 notas e 
//exiba uma mensagem indicando se o aluno foi aprovado ou reprovado. Considere que 
//a media minima para aprovacao e 6.Exemplifique e demonstre a saida! (5 Pontos)

let media = 6
let nota
let notastotal
let medianotas
let i = 0

while (i < 7){
    nota = prompt ('Insira um Valor') 
    notastotal = notastotal + nota
    i++
}

medianotas = notastotal / 7

if (medianotas < media){
    console.log("Você foi aprovado!")
}else{
    console.log("Você foi reprovado!")
}


// 7) Crie um programa que digite o nome, idade, Curso e ano na tela um embaixo do outro, 
//no seu html coloque um fundo e um titulo e o javascript deve ser externo.(20 Pontos)

let nome = prompt ("Digite seu nome: ")
let idade = prompt ("Digite sua idade: ")
let curso = prompt ("Digite seu curso: ")
let ano = prompt ("Digite seu ano: ")
console.log (nome)
console.log(idade)
console.log(curso)
console.log(ano)
