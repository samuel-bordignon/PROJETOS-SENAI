/*9) Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são
necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15
reais. No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito
somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa. Criar um
programa que pergunte quantas pessoas vão no passeio e o tempo de passeio. Mostrar na
tela o total cobrado pelo passeio.*/

let tempoPasseio = Number(prompt('Digite o tempo desejado de passeio em minutos: '))
const gastoGasMinuto = 2
const precoMetroGas = 15
let quantidadeGas = tempoPasseio * gastoGasMinuto
let precoTempoPasseio =  quantidadeGas * precoMetroGas
let quantidadePessoa = Number(prompt('Digite quantas pessoas vão ao passeio: '))

while(quantidadePessoa > 4){
  alert('Número de pessoas excedente!')
  quantidadePessoa = Number(prompt('Digite quantas pessoas vão ao passeio: '))
}

const taxaPessoa = 20
let precoPessoa = taxaPessoa * quantidadePessoa
let preçoFinal = precoPessoa + precoTempoPasseio

alert('Total a pagar: R$ ' + preçoFinal)