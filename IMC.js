/*6) Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. */

let pesoUsuario = Number(prompt('Digite seu peso: '))
let alturaUsuario = Number(prompt('Digite sua altura: '))
let imcUsuario = pesoUsuario / alturaUsuario **2

alert('IMC do usuário: ' + imcUsuario)