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