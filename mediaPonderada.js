/*4) Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota) da faculdade. A média é composta por três notas:
 Atividade Individual, Seminário em Equipe, Projeto final. O usuário deve digitar as três notas e os seus respectivos pesos. A média deve ser
  calculada e mostrada na tela.*/

let notaIndividual = Number(prompt('Digite sua nota da atividade Individual (peso 1): '))
let notaSeminario = Number(prompt('Digite a nota do seminário: (peso 2)'))
let notaProjetoFinal = Number(prompt('Digite a nota do projeto final (peso 3): '))

let notaPesoUm = notaIndividual * 1
let notaPesoDois = notaSeminario * 2
let notaPesoTres = notaProjetoFinal * 3
let somaNotas = notaPesoUm + notaPesoDois + notaPesoTres
let mediaPonderada = somaNotas / 6

alert('A média ponderada é: ' + mediaPonderada)
