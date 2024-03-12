let macas = prompt("Digite quantas maçãs foram compradas:");
let menosQue12 = 0.30;
let maisQue12 = 0.25;

if(macas < 12) {
    alert("Total da compra a R$0,30 - R$ " + macas * menosQue12)
} else{
    alert("Total da compra a R$0,25 - R$ " + macas * maisQue12)
};