/*2) Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo,
exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando
que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve
digitar quantos casais (dados de pesquisa de campo)existem dentre esse total e mostrar na tela a soma geral
de área dominada, incluindo todos indivíduos. */

const areaPorleao = 320
const areaPorCasal = 400
let numeroFemeas = 9
let numeroMachos = 5

alert('Nesta reserva há 9 fêmeas e 5 machos.')
let numeroDeCasais = Number(prompt('Digite o número de casais de leões tem na reserva: '))

if(numeroDeCasais > 5){
    alert('Quantidade de casais não bate com o número de leões!')

}else if(numeroDeCasais == 5){
    numeroFemeas = numeroFemeas - 5
    numeroMachos = numeroMachos - 5

}else if(numeroDeCasais == 4){
    numeroFemeas = numeroFemeas - 4
    numeroMachos = numeroMachos - 4

}else if(numeroDeCasais == 3){
    numeroFemeas = numeroFemeas - 3
    numeroMachos = numeroMachos - 3

}else if(numeroDeCasais == 2){
    numeroFemeas = numeroFemeas - 2
    numeroMachos = numeroMachos - 2

}else if(numeroDeCasais == 1){
    numeroFemeas = numeroFemeas - 1
    numeroMachos = numeroMachos - 1

}

let numerTotalLeoes = numeroFemeas + numeroMachos
let areaFinalLeoes = numerTotalLeoes * areaPorleao
let areaFinalCasais = numeroDeCasais * areaPorCasal
let areaFInal = areaFinalCasais + areaFinalLeoes

alert('Valor da área total do território dos leões é ' + areaFInal + 'Km²')
