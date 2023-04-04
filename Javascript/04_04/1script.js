//let opcao = 2
/*let opcao = parseInt(prompt('Digite uma opcao'))

switch (opcao) {
    case 1:
        document.write('primeira opcao')
        break;
    case 2:
        document.write("Segunda opção")
        break;
    case 3:
        document.write("Terceira opção")
        break;
    default:
        document.write("Nenhuma das opções validas")
        break;
} */

/*let valor = 7
console.log(valor);   //valor igual a 1
valor = valor+1
console.log(valor);   //valor igual a 8
valor++
console.log(valor);   //valor igual a 9

for(let i=0; i < 10; i++){
    console.log('Agora i vale '+i);
}

let carros =['Gol', 'Fusca', 'HB20', 'Corsa']

for(let i=0; i <carros.length; i++){
    console.log(carros[i]);
} */


//incrementando e decremento

let valor1 = 7
document.write(valor1)
document.write('<br><br>')
valor1 = valor1 += 4;
valor1++
document.write(valor1)

let valor2 = 10
document.write(valor2)
valor2 = valor2 -= 2
document.write(valor2)
document.write('<br><br>')

//usando for 

for (let i = 0; i < 10; i++) {
    document.write('o valor é ', i)
    document.write('<br><br>')
}
//usando for com array

let carros = ['Gol', 'Fusca', 'HB20', 'Corsa']
for (let i = 0; i < carros.length; i++) {
    document.write(carros[i]);
    document.write('<br><br>')
}