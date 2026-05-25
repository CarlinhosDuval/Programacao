// Função para alternar entre as abas sem recarregar a página
function openTab(event, tabId) {
    // Esconde todos os conteúdos das abas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Remove a classe 'active' de todos os botões
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Mostra a aba atual e adiciona a classe 'active' ao botão clicado
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Função geral para atualizar os cronômetros
function updateCountdowns() {
    const countdownElements = document.querySelectorAll('.countdown');

    countdownElements.forEach(countdown => {
        // Pega a data alvo definida no atributo 'data-date' do HTML
        const targetDate = new Date(countdown.getAttribute('data-date')).getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        // Elementos de exibição de tempo internos deste cronômetro específico
        const daysEl = countdown.querySelector('.days');
        const hoursEl = countdown.querySelector('.hours');
        const minutesEl = countdown.querySelector('.minutes');
        const secondsEl = countdown.querySelector('.seconds');

        if (difference > 0) {
            // Cálculos matemáticos para conversão de tempo
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Adiciona o zero à esquerda se for menor que 10
            daysEl.textContent = days < 10 ? '0' + days : days;
            hoursEl.textContent = hours < 10 ? '0' + hours : hours;
            minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
            secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
        } else {
            // Caso o dia da prova já tenha chegado ou passado
            countdown.innerHTML = "<p style='color: #ffb74d; font-size: 1.5rem; font-weight: bold;'>A prova já foi realizada ou está acontecendo!</p>";
        }
    });
}

// Executa a função a cada 1 segundo
setInterval(updateCountdowns, 1000);

// Executa imediatamente ao carregar a página para evitar o delay de 1 segundo do setInterval
updateCountdowns();