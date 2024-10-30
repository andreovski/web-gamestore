document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".register-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const cpf = document.getElementById("CPF").value;
    const senha = document.getElementById("senha").value;
    const nome = document.getElementById("nome").value;

    const user = {
      email: email,
      cpf: cpf,
      senha: senha,
      nome: nome,
    };

    const data = JSON.parse(localStorage.getItem("users")) || [];

    localStorage.setItem("users", JSON.stringify([...data, user]));
    window.location.href = "../login/login.html";
  });
});
