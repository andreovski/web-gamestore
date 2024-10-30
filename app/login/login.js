document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) => user.email === email && user.senha === senha
    );

    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      window.location.href = "../../index.html";
    } else {
      alert("Email ou senha incorretos. Tente novamente.");
    }
  });
});
