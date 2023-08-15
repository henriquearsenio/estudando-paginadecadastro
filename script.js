const formulario = document.getElementById("formulario-cadastro");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    console.log(`Nome: ${nome}`);
    console.log(`Email: ${email}`);
    console.log(`Senha: ${senha}`);
})