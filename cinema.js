/*11) Um sistema de reservas de ingressos do cinema, que deve permitir que o usuário
escolha o filme, o horário e o número de ingressos desejados. Após a seleção, deve ser
exibido o total a ser pago. Exibir ao usuário opções de filmes e horários. Os valores do
ingresso devem ser pré-definidos */
  
let respostaFilme
let respostaHorario
let respostaNumero
const valorUnidadeingresso = 49.70

alert('Bem vindo ao hub do Cinemark!')

respostaFilme = prompt('Filmes disponíveis: \n (Velozes e furiosos) \n (Whiplash em busca da perfeição) \n (Vingadores a era de Ultron)')
respostaHorario = prompt('Horários disponíveis: \n (10:30) \n (22:40) \n (13:50) \n (16:25)')
respostaNumero = Number(prompt('Digite o números de ingressos desejados: '))

if(respostaFilme != 'Velozes e furiosos' && respostaFilme != 'Whiplash em busca da perfeição' && respostaFilme != 'Vingadores a era de Ultron'){
  alert('Filme não encontrado! Por favor verifique se sua resposta está incluída no nosso catálogo')

}else if(respostaHorario != '10:30' && respostaHorario != '22:40' && respostaHorario != '13:50' && respostaHorario != '16:25'){
  alert('Horário não encontrado! Por favor verifique se sua resposta está incluída no nosso catálogo')

}else{
  alert(`Reserva do filme "${respostaFilme}", no horário das ${respostaHorario}.`)

let valorTotal = respostaNumero * valorUnidadeingresso

  alert('Valor do ingresso: R$' + valorTotal)
}