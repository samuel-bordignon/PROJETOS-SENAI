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