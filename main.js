const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

// Atribui as funções aos botões (assumindo que o [0] é o de diminuir e o [1] o de aumentar)
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho; 

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

// Configuração do campo de senha
const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Adicionei o Z que faltava na ordem correta
campoSenha.value = letrasMaiusculas;