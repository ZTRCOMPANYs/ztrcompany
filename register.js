document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('registerEmail').value;
    var password = document.getElementById('registerPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Verifica se as senhas correspondem
    if (password !== confirmPassword) {
        alert('As senhas não correspondem.');
        return;
    }

    // Verifica se o email já está registrado
    if (localStorage.getItem(email) !== null) {
        alert('Este email já está registrado. Por favor, faça login.');
        window.location.href = "index.html";
        return;
    }

    // Armazena os dados do usuário no localStorage
    localStorage.setItem(email, password);
    alert('Registro realizado com sucesso!');
    // Redirecionar para a página de login após o registro bem-sucedido
    window.location.href = "index.html";
});