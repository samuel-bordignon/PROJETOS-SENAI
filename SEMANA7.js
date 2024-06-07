// //EXERCÍCIO 1
/* 1) Crie um programa que peça os dados de um cliente: Nome, idade, nacionalidade, endereço. Após digitados os dados, mostrar na tela a seguinte mensagem
  "Cliente [Nome], com [idade] anos, [nacionalidade], reside no endereço [endereço]". Exemplo: Cliente Lucas, com 29 anos, brasileiro, reside no endereço 
  Rua Victor Meirelles, 281, Centro, Florianópolis.*/

 let nomePessoa = prompt("Digite seu nome: ")
 let idadePessoa = prompt("Digite sua idade: ")
 let nacionalidde = prompt("Digite sua nacionalidade: ")
 let endereco = prompt("Digite seu endereço: ")

 alert('Cliente ' + nomePessoa + ' , com '  + idadePessoa + ' anos, ' + nacionalidde  + ', reside no endereço ' + endereco + '.')

//EXERCÍCIO 2

/*2) Faça um programa no qual o usuário digite dois números e mostre na tela a multiplicação desses números.  */

 let numeroDois, numeroUm, multNumero

 numeroUm = Number(prompt('Digite o primeiro número: '))
 numeroDois = Number(prompt('Digite o segundo número: '))

 multNumero = numeroUm * numeroDois

 alert('Multiplição resulta em: ' + multNumero)

//EXERCÍCIO 3

/*3) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY)
 e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas.  */

 let anoNasci = Number(prompt('Digite o seu ano de nascimento no formato (YYYY):'))
 let anoAtual = Number(prompt('Digite o ano atual no formato (YYYY):'))
 let idadeAno = anoAtual - anoNasci
 let idadeMes = idadeAno * 12
 let idadeDia = idadeAno * 365
 idadeSemana = idadeDia / 7

 alert('você tem ' + idadeAno + ' ano(s), ' + idadeMes + ' meses, ' + idadeSemana + ' semanas e ' + idadeDia + 'dias.' )

//EXERCÍCIO 4

//4) Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela. 

 let temp_indicada_C = Number(prompt('Digite a temperatura em celsius (C°): '))
 let temp_F = (temp_indicada_C * 1.8) + 32
 alert(temp_indicada_C + "°C são " + temp_F + "°F")

//EXERCÍCIO 5

 let numeroEleitores = Number(prompt('Digite o total de eleitores: '))
 let votosX = Number(prompt('Digite a quantidade de votos para o candidato X: '))
 let votosY = Number(prompt('Digite a quantidade de votos para o candidato Y: '))
 let votosNulo = Number(prompt('Digite a quantidade de votos em BRANCO: '))
 let votosBranco = Number(prompt('Digite a quantidade de votos NULOS: '))
 let totalVotos = votosBranco + votosNulo + votosX + votosY
 const percentual = 100

 if(totalVotos != numeroEleitores){
     alert('QUANTIDADE DE VOTOS INCONDISENTE COM O NÚMERO DE ELEITORES!')
 }

 let percentualX = (votosX * percentual)/ numeroEleitores
 let percentualY = (votosY * percentual)/ numeroEleitores
 let percentualBranco = (votosBranco * percentual)/ numeroEleitores
 let percentualNulo = (votosNulo * percentual)/ numeroEleitores

 alert('Porcentagem de votos para o candidato X: %' + percentualX )
 alert('Porcentagem de votos para o candidato Y: %' + percentualY)
 alert('Porcentagem de votos em Brancos: %' + percentualBranco)
 alert('Porcentagem de votos nulos: %' + percentualNulo)

//6) Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. 

 let pesoUsuario = Number(prompt('Digite seu peso: '))
 let alturaUsuario = Number(prompt('Digite sua altura: '))
 let imcUsuario = pesoUsuario / alturaUsuario **2

 alert('IMC do usuário: ' + imcUsuario)

/*7) Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem
 R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja
  entregar na fábrica e mostrar o total que receberá em reais.  */
  
const preçoQuiloPlastico = 0.2
const preçoQuiloPapel = 0.1
const preçoQuiloMetal = 0.1
let quantidadePlastico = Number(prompt('Digite quantos quilos de plástico voce deseja reciclar (Digite "0" se não desejar reciclar este material): '))
let quantidadePapel = Number(prompt('Digite quantos quilos de papel voce deseja reciclar (Digite "0" se não desejar reciclar este material): '))
let quantidadeMetal = Number(prompt('Digite quantos quilos de metal voce deseja reciclar (Digite "0" se não desejar reciclar este material): '))

let valorPlastico = quantidadePlastico * preçoQuiloPlastico
let valorPapel = quantidadePapel * preçoQuiloPapel
let valorMetal = quantidadeMetal * preçoQuiloMetal

alert('Valor total a receber: ' + valorTotal)

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

//EXERCÍCIO 9
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

// //EXERCÍCIO 10
// /*10) As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, em
// média 200 anos. A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez.
// Programar um sistema que calcule o total de filhotes ao longo da vida e a média de filhotes
// de uma baleia dessa espécie por década. */

const mediaFilhotes = 200 / 4, mediaFilhotesDecada = 10 / 4

alert('As baleias da groenlândia tem em média ' +  mediaFilhotes + ' filhotes em toda sua vida. \n A cada década essas balaias tem em média ' + mediaFilhotesDecada + "filhotes.")

//EXERCÍCIO 11
/*11) Um sistema de reservas de ingressos do cinema, que deve permitir que o usuário
escolha o filme, o horário e o número de ingressos desejados. Após a seleção, deve ser
exibido o total a ser pago. Exibir ao usuário opções de filmes e horários. Os valores do
ingresso devem ser pré-definidos */
  
alert('Bem vindo ao hub do Cinemark!')

let filmeReservado = prompt('Digite o filme desejado:')
let horarioResesvado = prompt('Digite o horário desejado: ')
let numeroResesvado = prompt('Digite os números que deseja reservar: ')
const valorIngresso = 42.35

alert('Filme ' + filmeReservado + ' reservado no horario ' + horarioResesvado + ' nos números ' + numeroResesvado)
alert('Total a ser pago: R$' + valorIngresso)


//EXERCÍCIO 12
/*12) Um programa de recomendação de livros baseado nos interesses do usuário. O sistema
deve solicitar ao usuário seus gêneros literários favoritos e, em seguida, sugerir uma lista de
livros que podem ser do seu interesse.
 */

alert('Gêneros literários disponíveis: \n(terror)\n(romance)\n(ficção científica)')
let resposta = prompt('Dentre as opções disponíveis, digite o seu gênero de livro favorito: ')

const livroUM = "O iluminado"
const livroDOIS = "O Exorcista"
const livroTRES = "Psicose"
const livroQUATRO ="Orgulho e Preconceito"
const livroCINCO = "O Amor nos Tempos do Cólera"
const livroSEIS = "Como Eu Era Antes de Você"
const livroSETE = "Duna"
const livroOITO = "Fundação" 
const livroNOVE = "Neuromancer"

if(resposta == 'terror'){
  alert('Livros recomendados:\n'+ livroUM + '\n' + livroDOIS + '\n' + livroTRES)
}else if(resposta == 'romance'){
  alert('Livros recomendados:\n'+ livroQUATRO + '\n' + livroCINCO + '\n' + livroSEIS)
}else if(resposta == 'ficção científica'){
  alert('Livros recomendados:\n'+ livroSETE + '\n' + livroOITO + '\n' + livroNOVE)
}else{
  alert('Resposta inválida. Livro não encontrado')
}

//EXERCÍCIO 13

/*13) Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a)
comprador(a) ganha 15% de desconto. Criar um programa que receba os valores dos 3
livros e mostra na tela o total dos livros sem desconto e com desconto. */

let livroUm = Number(prompt('Digite o valor do primeiro livro: '))
let livroDois = Number(prompt('Digite o valor do segundo livro: '))
let livroTres = Number(prompt('Digite o valor do terceiro livro: '))
let somaLivros = livroUm + livroDois + livroTres
const descontoLivros = 15 / 100
let livroComDesconto = somaLivros * descontoLivros
let valorTotal = somaLivros - livroComDesconto

alert('total a pagar: R$' + valorTotal)
