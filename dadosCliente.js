/* 1) Crie um programa que peça os dados de um cliente: Nome, idade, nacionalidade, endereço. Após digitados os dados, mostrar na tela a seguinte mensagem
  "Cliente [Nome], com [idade] anos, [nacionalidade], reside no endereço [endereço]". Exemplo: Cliente Lucas, com 29 anos, brasileiro, reside no endereço 
  Rua Victor Meirelles, 281, Centro, Florianópolis.*/

  let nomePessoa = prompt("Digite seu nome: ")
  let idadePessoa = prompt("Digite sua idade: ")
  let nacionalidde = prompt("Digite sua nacionalidade: ")
  let endereco = prompt("Digite seu endereço: ")

  alert('Cliente ' + nomePessoa + ' , com '  + idadePessoa + ' anos, ' + nacionalidde  + ', reside no endereço ' + endereco + '.')
