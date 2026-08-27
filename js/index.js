document.addEventListener('DOMContentLoaded', function () {
    const typedEl = document.getElementById('typedWelcome');
    const splash = document.getElementById('splash');
    const text = 'Melvin Jan Martinez';
    let i = 0;

    function typeStep() {
        if (i < text.length) {
            typedEl.append(text[i]);
            i++;
            setTimeout(typeStep, 65 + Math.random() * 55);
        } else {
            setTimeout(finish, 900);
        }
    }

    function finish() {
        splash.classList.add('fade-out');
        setTimeout(function () {
            window.location.href = 'details.html';
        }, 900);
    }

    setTimeout(typeStep, 500);
});
