let msg = document.getElementById('msg')

const usuario = [{
        nome: 'Huginho',
        idade: 18
    },
    {
        nome: 'Zezinho',
        idade: 19
    },
    {
        nome: 'Luizinho',
        idade: 20
    }
]

const Users = usuario.length

for (let i = 0; i<Users; i++){
    msg.innerHTML += `<p>${usuario[i].nome} ${usuario[i].idade}</p>`
}

var imagens = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg'
]

var index = 0
var time = 2000

function slideShow() {
    document.getElementById('image').src = imagens[index]
    index++
    if (index == imagens.length)
    {
        index = 0
    }
    setTimeout('slideShow()',time)
}

slideShow()