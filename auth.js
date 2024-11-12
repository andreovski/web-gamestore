document.addEventListener("DOMContentLoaded", function () {
  const profileDiv = document.getElementById("profile");
  const loginButton = document.getElementById("btn-login");
  const logoutButton = document.getElementById("btn-logout");
  const usernameElement = document.getElementById("username");
  // Função para verificar se existe um login no sessionStorage
  function checkLogin() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      profileDiv.style.display = "flex";
      loginButton.style.display = "none";
    } else {
      profileDiv.style.display = "none";
      loginButton.style.display = "flex";
    }
    return user;
  }

  // Função para exibir o nome do usuário
  function displayUsername(user) {
    if (usernameElement && user) {
      usernameElement.innerText = user.nome || user.name;
    }
  }

  // Função para sair
  function logout() {
    sessionStorage.removeItem("user");
    location.replace("/");
  }

  // Adicionar evento de clique ao botão de logout
  logoutButton.addEventListener("click", logout);

  // Verificar login ao carregar a página
  const user = checkLogin();
  displayUsername(user);
});
