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
