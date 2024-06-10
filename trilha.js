/*3) Você é um amante da natureza e adora fazer trilhas. Criar um programa que calcule a velocidade média das trilhas que você realiza. Para isso, devem ser 
digitados os dados de distância percorrida (quilômetros) e tempo que a trilha durou (horas). Fazer então o cálculo da velocidade média e mostrar na 
tela a mensagem "Sua média de velocidade durante essa trilha foi de X km/h", sendo X a velocidade.*/

alert('Bem vindo ao calculador de velocidade média! \n Siga as instruções a seguir para continuar com atendimento.')
let distancia = Number(prompt('Digite a distncia percorrida pela trilha (em quilômetros): '))
let tempoTrilha = Number(prompt('Digite o tempo de duração da trilha (em horas)'))
let mediaVelo = distancia /tempoTrilha

alert('Sua velocidade média é: ' + mediaVelo + 'Km/h')

