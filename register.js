function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Enregistrer les informations utilisateur
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert("Inscription réussie. Vous pouvez maintenant vous connecter.");
    window.location.href = 'login.html'; // Rediriger vers la page de connexion après inscription
}
