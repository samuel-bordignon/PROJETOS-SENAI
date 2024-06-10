//EXERCÍCIO 8
/*8) Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a 
média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados 
devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos
 por pessoa na festa.*/

 const totalLitros = 300
 const totalConvidados = 45
 let chopPerdido = Number(prompt('Digite quantos litros de chop foram desperdiçados: '))

 let chopRestante = Number(prompt('Digite quantos litros sobraram: '))

 let litrosConsumidos = totalLitros - chopPerdido - chopRestante

 let mediaLitrosPessoa = litrosConsumidos /totalConvidados

 alert('Média de litros de chop bebidos por pessoa: ' + mediaLitrosPessoa)