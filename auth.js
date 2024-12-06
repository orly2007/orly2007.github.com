document.addEventListener('DOMContentLoaded', () => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) {
        window.location.href = 'login.html'; // Rediriger vers la page de connexion si non connecté
    }
});

function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
}
