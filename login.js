function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Vérifier les informations de connexion
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'dashboard.html'; // Rediriger vers le tableau de bord après connexion
    } else {
        alert("Email ou mot de passe incorrect.");
    }
}
