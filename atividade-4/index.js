const reciboDeVenda = "régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;";

const reciboArray = reciboDeVenda.replaceAll('/', ';').replaceAll('valor','').replaceAll('=cupom',';').split(';');
reciboArray.pop();

console.log(reciboArray);

const reciboOrganizado = [];

let totalCompra = 0;
let totalComDesconto = 0;
let quantidadeDeProdutos = 0;

for (let i = 0; i < reciboArray.length; i += 3){
    const produto = reciboArray[i];
    const valorProduto = parseFloat(reciboArray[i + 1]);
    const descontoProduto = parseFloat(reciboArray[i + 2]);
    const valorProdutoComDesconto = parseFloat(valorProduto - (valorProduto * (descontoProduto / 100)));
    const quantidade = reciboArray.filter(item => item === produto).length;

    reciboOrganizado[produto] = {
        quantidade: quantidade,
        valor: valorProduto,
        desconto: descontoProduto,
        valorComDesconto: valorProdutoComDesconto,
        valorFinal: valorProdutoComDesconto * quantidade
    };

    totalCompra += valorProduto;
    totalComDesconto += valorProdutoComDesconto;
    quantidadeDeProdutos++;
}

const totalDesconto = totalCompra - totalComDesconto;
const descontoTotal = ((totalCompra - totalComDesconto) / (totalCompra / 100));

console.log(reciboOrganizado);
console.log(`Foram comprados ${quantidadeDeProdutos} produtos.`);
console.log(`O valor total da compra foi de R$${totalCompra.toFixed(2)}.`);
console.log(`O desconto final foi de ${descontoTotal.toFixed(2)}% gerando uma economia de R$${totalDesconto.toFixed(2)}.`);
console.log(`Você vai pagar apenas R$${totalComDesconto.toFixed(2)}.`);