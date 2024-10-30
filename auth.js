document.addEventListener("DOMContentLoaded", function () {
  const profileDiv = document.getElementById("profile");
  const loginButton = document.getElementById("btn-login");
  const logoutButton = document.getElementById("btn-logout");
  const usernameElement = document.getElementById("username");
  const user = JSON.parse(sessionStorage.getItem("user"));

  // Função para verificar se existe um login no sessionStorage
  function checkLogin() {
    if (user) {
      profileDiv.style.display = "flex";
      loginButton.style.display = "none";
    } else {
      profileDiv.style.display = "none";
      loginButton.style.display = "flex";
    }
  }

  // Função para exibir o nome do usuário
  function displayUsername() {
    if (usernameElement && user) {
      usernameElement.innerText = user.nome;
    }
  }

  // Função para sair
  function logout() {
    sessionStorage.removeItem("user");
    location.reload();
  }

  // Adicionar evento de clique ao botão de logout
  logoutButton.addEventListener("click", logout);

  // Verificar login ao carregar a página
  checkLogin();
  displayUsername();
});
