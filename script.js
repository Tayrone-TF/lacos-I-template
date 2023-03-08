//Pratica 1 - while - No exemplo a baixo, enquanto(while) o número inserido pelo usuário não for igual a '0', irá acontecer a soma e em sequência o loop, pedindo novamente ao usuário um novo numero a ser somado.

const somarNumeros = () => {

    let numero = Number(prompt('Digite um número para iniciar a soma:'))

    let soma = 0

    while (numero !== 0) {
        soma = soma + numero
        numero = Number(prompt('Digite mais um número para ser somado soma:'))
    }
    console.log(`O valor da soma é ${soma}.`)
}

//somarNumeros()

//Pratica 2 - For - No exemplo a baixo, pediremos ao usuario que insira um número e o programa deve imprimir os números apatir do '0' até o número escolhido pelo usuário.

const imprimeNumeros = () => {
    const numero = Number(prompt('Digite um número para iniciar a impressão:'))

    for (contador = 0; contador <= numero; contador++) {
        console.log(`${contador}`)
    }
}

//imprimeNumeros()

//Pratica 3 - for com arrays - neste exemplo vamos criar um array com 7 números e utilizar o for para percorrer os indices do  array e imprimir o indice e o valor contido no indice

const numeros = [100, 22, 35, 74, 0, 999, -15]

const percorrendoUmArray = (array) => {
    for (i = 0; i < array.length; i++) {
        console.log(`O elemento de indice ${i} é ${array[i]}`)
    }
}

//percorrendoUmArray(numeros)

//Exercicio de fixaçã 1

//Utilizando o laço while, escreva um código que pergunta qual o tipo de usuário. O tipo de usuário é representado pelas letras abaixo:
// "A" - Administrador
// "B" - Usuário comum
// "C" - Usuário assinate
//Enquanto o valor passado for diferente da letra que representa "Administrador", o laço de se repetir, exibindo a mensagem: "Acesso negado.". Qando o valor for igual ao da letra que representa "Administrado", o laço deve parar, e a mensagem "Boas-vindas, admin!" deve ser impresa.

const verificaUsuario = () => {
    let usuario = prompt(`Qual é o seu usuário:
    "A" - Administrador
    "B" - Usuário comum
    "C" - Usuário assinante`).toUpperCase()

    while (usuario !== "A") {
        alert(`Acesso negado`)
        usuario = prompt(`Qual é o seu usuário:
        "A" - Administrador
        "B" - Usuário comum
        "C" - Usuário assinante`).toUpperCase()
    }
    alert(`Boas-vindas, admin!`)
}

//verificaUsuario()

//Exercicio de fixaçã 2

//Escreva, utilizando o laço for, um programa que imprima a tabuada do 2, de 1 a 10

const tabuada = () => {
    let numero = Number(prompt(`Qual tabuada você quer que eu mostre?`))
    console.log(`Você escolheu a tabuada do ${numero}`)

    let resultado
    for (i = 1; i <= 10; i++){
        resultado = numero * i
        console.log(`${numero} X ${i} = ${resultado}`)
    }
}

//tabuada()

//Exercicio de fixação 3

//Crie um laço for que recebe um array de strings, e imprima no console cada string em caixa alta

function percorrerArray(array){
    for(i = 0; i < array.length; i++){
        console.log(array[i].toUpperCase())
    }
}

percorrerArray(['banana', 'maça', 'laranja', 'uva', 'abacaxi', 'limão'])