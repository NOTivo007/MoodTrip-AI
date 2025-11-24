document.addEventListener('DOMContentLoaded', () => {
    const resultText = document.getElementById('result-text');
    document.querySelectorAll('.mood-btn').forEach(button => {
        button.addEventListener('click', () => {
            const mood = button.getAttribute('data-mood');
            resultText.textContent = `Ищу путешествия для настроения "${mood}"...`;
        });
    });
});
