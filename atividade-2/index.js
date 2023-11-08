const cadastro = document.getElementById('cadastro');
const clientesCadastrados = [];
const visualizadorCadastro = document.getElementById('visualizador-cadastro');

cadastro.innerHTML = `
<article>
    <h2>Cadastrar novo Cliente</h2>
    <button id="btn-cadastro">Clique para começar</button>
</article>
`;

const btnCadastro = document.getElementById('btn-cadastro');

btnCadastro.addEventListener('click', () => {
        cadastro.innerHTML = `
        <article>
            <h2>Cadastrar novo Cliente</h2>
            <form method="post">
                <label>Nome
                    <input type="text" id="nome" name="nome" placeholder="Informe o nome do cliente...">
                </label>
                <label>CPF/CNPJ
                    <input type="text" id="cpfCnpj" name="cpfCnpj" placeholder="Informe o CPF OU CNPJ do cliente...">
                </label>
                <button id="enviar-dados">Cadastrar</button>
            </form>
        </article>
        `;

        const btnEnviarDados = document.getElementById('enviar-dados');

        btnEnviarDados.addEventListener('click', (event) => {
            event.preventDefault();
            let valorNome = document.getElementById('nome').value;
            let valorCpfCnpj = document.getElementById('cpfCnpj').value;
            clientesCadastrados.push(valorNome);
            clientesCadastrados.push(valorCpfCnpj);

            console.log(clientesCadastrados);
            document.getElementById('nome').value = '';
            document.getElementById('cpfCnpj').value = '';
        })
    });

const bancoDeDados = [];
const pessoaFisica = [];
const pessoaJuridica = [];

document.getElementById('atualiza-cadastro').addEventListener('click', () => {
    if (clientesCadastrados.length === 0) {
        console.log('Nenhum cliente cadastrado para atualizar o banco de dados.');
        return;
    }
    
    for (i = 0; i < clientesCadastrados.length; i += 2) {
        const nomeArray = clientesCadastrados[i];
        const numeroArray = clientesCadastrados[i + 1];
    
        if (numeroArray.length < 12) {
            pessoaFisica.push([nomeArray, numeroArray]);
        } else {
            pessoaJuridica.push([nomeArray, numeroArray])
        }
    }

    bancoDeDados.push([pessoaFisica, pessoaJuridica]);

    console.log(pessoaFisica);
    console.log(pessoaJuridica);
    console.log(bancoDeDados);
})

//Resolvi me autodesafiar e adicionei uma interface simples para o cadastro dos clientes, e posterior atualização de um banco de dados de Arrays compostos por outros Arrays.
//O resultado talvez não tenha sido o ideal, mas recomendo a utilização do live server, com auxílio do dev tools para acompanhar os resultados no console enquanto interage com a interface.
