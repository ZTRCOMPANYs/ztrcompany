document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Verifica se o email já está registrado
    var storedPassword = localStorage.getItem(email);
    if (storedPassword === null) {
        alert('Conta não encontrada. Por favor, registre-se primeiro.');
        window.location.href = "register.html"; // Redireciona para a página de registro
    } else if (storedPassword === password) {
        alert('Login realizado com sucesso!');
        window.location.href = "site.html"; // Redireciona para a página principal após o login
    } else {
        alert('Senha incorreta.');
    }
});

document.getElementById('registerButton').addEventListener('click', function() {
    window.location.href = 'register.html'; // Redireciona para a página de registro
});

document.getElementById('showRegister').addEventListener('click', function() {
    document.querySelector('.container').classList.add('active');
});

document.getElementById('showLogin').addEventListener('click', function() {
    document.querySelector('.container').classList.remove('active');
});