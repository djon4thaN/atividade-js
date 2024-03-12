let nomeAluno = String(prompt("Digite o seu nome"));
let nota_1 = parseFloat(prompt("Digite a sua primeira nota"));
let nota_2 = parseFloat(prompt("Digite a sua segunda nota"));
let nota_3 = parseFloat(prompt("Digite a sua terceira nota"));

let media = (nota_1 + nota_2 + nota_3) / 3;

document.write("O aluno " + nomeAluno + " teve como média " + media + ".");