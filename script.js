document.addEventListener('DOMContentLoaded', (event) => {
    const meuBotao = document.getElementById('meuBotao');

    meuBotao.addEventListener('click', () => {
        alert('Olá! Você clicou no botão!');
    });
});