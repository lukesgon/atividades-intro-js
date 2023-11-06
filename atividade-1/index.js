console.log("Bem vindo à calculadora de avaliações do Ifood.")
console.log("Por favor, siga as instruções adequadamente.")

let conjuntoAvaliacoes = {
    umaEstrela: Number(prompt("Quantas avaliações apontaram 1 estrela?")),
    duasEstrelas: Number(prompt("Quantas avaliações apontaram 2 estrelas?")),
    tresEstrelas: Number(prompt("Quantas avaliações apontaram 3 estrelas?")),
    quatroEstrelas: Number(prompt("Quantas avaliações apontaram 4 estrelas?")),
    cincoEstrelas: Number(prompt("Quantas avaliações apontaram 5 estrelas?")),
}

console.log(`Houveram ${conjuntoAvaliacoes.umaEstrela} avaliações de 1 estrela.`)
console.log(`Houveram ${conjuntoAvaliacoes.duasEstrelas} avaliações de 2 estrelas.`)
console.log(`Houveram ${conjuntoAvaliacoes.tresEstrelas} avaliações de 3 estrelas.`)
console.log(`Houveram ${conjuntoAvaliacoes.quatroEstrelas} avaliações de 4 estrelas.`)
console.log(`Houveram ${conjuntoAvaliacoes.cincoEstrelas} avaliações de 5 estrelas.`)

let somatoriaUmaEstrela = 1 * conjuntoAvaliacoes.umaEstrela;
let somatoriaDuasEstrelas = 2 * conjuntoAvaliacoes.duasEstrelas;
let somatoriaTresEstrelas = 3 * conjuntoAvaliacoes.tresEstrelas;
let somatoriaQuatroEstrelas = 4 * conjuntoAvaliacoes.quatroEstrelas;
let somatoriaCincoEstrelas = 5 * conjuntoAvaliacoes.cincoEstrelas;
let somatoriaTotalEstrelas = somatoriaUmaEstrela + somatoriaDuasEstrelas + somatoriaTresEstrelas + somatoriaQuatroEstrelas + somatoriaCincoEstrelas;
let somatoriaAvaliacoes = conjuntoAvaliacoes.umaEstrela + conjuntoAvaliacoes.duasEstrelas + conjuntoAvaliacoes.tresEstrelas + conjuntoAvaliacoes.quatroEstrelas + conjuntoAvaliacoes.cincoEstrelas;
let mediaFinal = somatoriaTotalEstrelas / somatoriaAvaliacoes;

console.log(`Foram realizadas um total de ${somatoriaAvaliacoes} avaliações.`)
console.log(`A média final avaliada foi de ${mediaFinal}`)