/*1) Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. O cálculo de área em
 metros quadrados, é feito multiplicando a largura pelo comprimento. Digitar os valores (em metros) da largura e
  comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total
   a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50. */




const valorAzulejo = 0.76
const azulejoPorMetro = 120

let largura = Number(prompt('Digite quanto sua piscina tem de largura: '))
let comprimento = Number(prompt('Digite quanto sua piscina tem de comprimento: '))

let areaQuadrada = largura * comprimento
let totalAzulejos = azulejoPorMetro * areaQuadrada

let valorTotalAzulejo = totalAzulejos * valorAzulejo

alert('Total de azulejos: ' + totalAzulejos)
alert('Valor total a pagar: ' + valorTotalAzulejo)
