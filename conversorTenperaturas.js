//4) Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela. 

let temp_indicada_C = Number(prompt('Digite a temperatura em celsius (C°): '))
let temp_F = (temp_indicada_C * 1.8) + 32
alert(temp_indicada_C + "°C são " + temp_F + "°F")
