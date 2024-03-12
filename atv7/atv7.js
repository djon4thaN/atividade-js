let votosBrancos = parseFloat(prompt("Digite o numero de votos brancos"));
let votosNulos = parseFloat(prompt("Digite o numero de votos nulos"));
let votosValidos = parseFloat(prompt("Digite o numero de votos validos"));

let totalEleitores = votosBrancos + votosNulos + votosValidos;
let resultado_1 = (votosBrancos / totalEleitores) * 100;
let resultado_2 = (votosNulos / totalEleitores) * 100;
let resultado_3 = (votosValidos / totalEleitores) * 100;

document.write("O total de eleitores é: " + totalEleitores + "<br>");
document.write("O total de votos brancos é: " + resultado_1 + "%" + "<br>");
document.write("O total de votos nulos é: " + resultado_2 + "%" + "<br>");
document.write("O total de votos válidos é: " + resultado_3 + "%" + "<br>");