document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    
    // Verifica se o nome contém "Helen"
    if(username.toLowerCase().includes('helen')) {
        alert('Login bem-sucedido! Bem-vindo ao meu portfólio de namoro!');
        window.location.href = 'main.html'; // Redireciona para o perfil
    } else {
        alert('Se você não é Helen, nem tente!!!');
    }
});
