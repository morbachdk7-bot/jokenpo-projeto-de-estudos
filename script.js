const botoes = document.querySelectorAll('.btn-jogada');
const areaResultado = document.getElementById('resultado');
const btnReiniciar = document.getElementById('reiniciar');

const opcoes = ['pedra', 'papel', 'tesoura'];

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const escolhaUsuario = botao.id;
        const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
        
        determinarVencedor(escolhaUsuario, escolhaComputador);
    });
});

function determinarVencedor(usuario, computador) {
    let resultado = '';

    if (usuario === computador) {
        resultado = `Empate! Nós dois escolhemos ${usuario}.`;
    } else if (
        (usuario === 'pedra' && computador === 'tesoura') ||
        (usuario === 'papel' && computador === 'pedra') ||
        (usuario === 'tesoura' && computador === 'papel')
    ) {
        resultado = `Você ganhou! ${usuario} vence ${computador}.`;
    } else {
        resultado = `Você perdeu! ${computador} vence ${usuario}.`;
    }

    areaResultado.innerHTML = `<p>${resultado}</p>`;
    btnReiniciar.style.display = 'inline-block';
}

btnReiniciar.addEventListener('click', () => {
    areaResultado.innerHTML = '<p>Faça sua escolha para começar!</p>';
    btnReiniciar.style.display = 'none';
});