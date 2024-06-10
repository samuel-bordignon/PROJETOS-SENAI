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