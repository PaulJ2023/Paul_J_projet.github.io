const boutonsPlus = document.querySelectorAll('.plus');

boutonsPlus.forEach(bouton => {
    bouton.addEventListener('click', () => {
        const projetId = bouton.dataset.projet;
        const details = document.getElementById(projetId);
        details.style.display = 'block';
    });
});