
const faixaEtaria = document.getElementById('faixaEtaria');

const btnCalculadora = document.getElementById('calcular')

faixaEtaria.addEventListener('change', ()=> {if (faixaEtaria.value === "selecione") {
        document.getElementById('sobreIMC').innerHTML = `
        <section>
            <p>O IMC (Índice de Massa Corporal) é uma ferramenta usada para avaliar o peso ideal de um indivíduo, além de detectar casos de obesidade ou desnutrição em pessoas de diferentes idades.
            <p>É possível encontrar o resultado do índice fazendo uma conta que envolve a relação do peso de uma pessoa em quilos com a sua altura ao quadrado.</p>
            <p>Para a avaliação de um paciente individualmente, no entanto, ele pode ser falho por não levar em conta a composição desse peso corporal, que pode ser composto por gordura, músculos, água e estruturas ósseas.</p>
            <p>É importante lembrar também que o IMC varia suas classificações conforme a idade da pessoa, de forma a variar inclusive a quantidade de classificações conforme a faixa etária do indivíduo.</p>
            <p>A fórmula considerada para o cálculo do IMC é a seguinte:</p>
        </section>
        <br>
        <section>
            <span id="formulaIMC">IMC = quilogramas / (altura x altura) </span>
        </section>
        `
        } else if(faixaEtaria.value === "adulto") {
            document.getElementById('sobreIMC').innerHTML = `
            <section id="sobreAdultos">
                <p>Adultos devem considerar a seguinte classificação de IMC:</p>
                <table>
                    <thead>
                        <th>IMC</th>
                        <th>Resultado</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="classificacao">Menos do que 18,5</td>
                            <td>Abaixo do peso</td>
                        </tr>
                        <tr>
                            <td class="classificacao">Entre 18,5 e 24,9</td>
                            <td>Peso normal</td>
                        </tr>
                        <tr>
                            <td class="classificacao">Entre 25 e 29,9</td>
                            <td>Sobrepeso</td>
                        </tr>
                        <tr>
                            <td class="classificacao">Entre 30 e 34,9</td>
                            <td>Obesidade grau 1</td>
                        </tr>
                        <tr>
                            <td class="classificacao">Entre 35 e 39,9</td>
                            <td>Obesidade grau 2</td>
                        </tr>
                        <tr>
                            <td class="classificacao">Mais do que 40</td>
                            <td>Obesidade grau 3</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            `
        } else if(faixaEtaria.value === "idoso") {
            document.getElementById('sobreIMC').innerHTML = `
            <section id="sobreIdosos">
                <p>Idosos, por possuírem uma composição corporal diferenciada, devem considerar a seguinte classificação de IMC:</p>
                <table>
                    <thead>
                        <th>IMC</th>
                        <th>Resultado</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="classificacao">Menos de 22</td>
                            <td>Abaixo do peso</td>
                        </tr>
                        <tr>
                            <td class="classificacao">Entre 22 e 27</td>
                            <td>Peso normal</td>
                        </tr>
                        <tr>
                            <td class="classificacao">Acima de 27</td>
                            <td>Obesidade</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            `
        }
    }
);

btnCalculadora.addEventListener('click', (event) => {
    const nomeUsuario = document.getElementById('name').value;
    const faixaEtariaValue = document.getElementById('faixaEtaria').value;
    let alturaUsuario = document.getElementById('altura').value.replace(',', '.');
    let massaUsuario = document.getElementById('massa').value.replace(',', '.');
    const articleResposta = document.getElementById('calculadoraIMCArticle');

    if (faixaEtariaValue === "selecione" || nomeUsuario === '' || alturaUsuario === '' || massaUsuario === '' ) {
        event.preventDefault();
        console.log("Por favor, preencha todos os dados requisitados.")
        articleResposta.innerHTML = `
        <h2>Dados não encontrados</h2>
        <p>Parece que você esqueceu de informar algum dado ou preencheu algo incorretamente, clique abaixo e tente novamente.</p>
        <button id="btn-tentar-novamente">Tentar Novamente!</button>`

        const btnTentarNovamente = document.getElementById('btn-tentar-novamente');

        btnTentarNovamente.addEventListener ('click', () => {
            location.reload();
        })

    } else {
        event.preventDefault();
        const calcularIMC = (parseFloat(massaUsuario))/((parseFloat(alturaUsuario)) * (parseFloat(alturaUsuario)));
        let classeIMC;

        if (faixaEtariaValue === 'adulto') {
            if (calcularIMC < 18.5) {
                classeIMC = "abaixo do peso";
            } else if (calcularIMC >= 18.5 && calcularIMC < 25) {
                classeIMC = "peso normal";
            } else if (calcularIMC >= 25 && calcularIMC < 30) {
                classeIMC = "sobrepeso";
            } else if (calcularIMC >= 30 && calcularIMC < 35) {
                classeIMC = "obesidade grau 1";
            } else if (calcularIMC >= 35 && calcularIMC < 40) {
                classeIMC = "obesidade grau 2";
            } else if (calcularIMC >= 40) {
                classeIMC = "obesidade grau 3";
            } else {
                classeIMC = "inválido";
            }
        } else if (faixaEtariaValue === 'idoso') {
            if (calcularIMC < 22) {
                classeIMC = "abaixo do peso";
            } else if (calcularIMC >= 22 && calcularIMC <= 27 ) {
                classeIMC = "peso normal";
            } else {
                classeIMC = "obesidade";
            }
        }

        articleResposta.innerHTML = `
        <h2>Resultado</h2>
        <p>${nomeUsuario}, o seu IMC calculado é de <strong>${calcularIMC.toFixed(2)}</strong>, de forma que seu IMC é classificado como <strong>${classeIMC}</strong>.</p>
        <button id="btn-calcular-novamente">Calcular novamente!</button>`
        console.log(`${nomeUsuario}, o seu IMC calculado é de ${calcularIMC.toFixed(2)}, de forma que seu IMC é classificado como ${classeIMC}.`);
        const btnCalcularNovamente = document.getElementById('btn-calcular-novamente');

        btnCalcularNovamente.addEventListener ('click', () => {
            location.reload();
    });
}
}
);