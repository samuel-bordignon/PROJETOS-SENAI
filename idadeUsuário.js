/*3) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY)
 e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas.  */

 let anoNasci = Number(prompt('Digite o seu ano de nascimento no formato (YYYY):'))
 let anoAtual = Number(prompt('Digite o ano atual no formato (YYYY):'))
 let idadeAno = anoAtual - anoNasci
 let idadeMes = idadeAno * 12
 let idadeDia = idadeAno * 365
 idadeSemana = idadeDia / 7

 alert('você tem ' + idadeAno + ' ano(s), ' + idadeMes + ' meses, ' + idadeSemana + ' semanas e ' + idadeDia + 'dias.' )
