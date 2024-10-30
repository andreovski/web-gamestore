document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("user-form");

  // Função para salvar os dados no localStorage
  function saveToLocalStorageAndUpdateSession(user) {
    const data = JSON.parse(localStorage.getItem("users")) || [];

    const userIndex = data.findIndex((u) => u.cpf === user.cpf);

    if (userIndex !== -1) {
      data[userIndex] = user;
    } else {
      return alert("Usuário não encontrado.");
    }

    localStorage.setItem("users", JSON.stringify(data));
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  // Função para obter os dados do localStorage
  function getFromSessionStorage() {
    return JSON.parse(sessionStorage.getItem("user")) || {};
  }

  // Função para preencher o formulário com os dados do localStorage
  function fillForm() {
    const user = getFromSessionStorage();
    document.getElementById("nome").value = user.nome || "";
    document.getElementById("email").value = user.email || "";
    document.getElementById("cpf").value = user.cpf || "";
    document.getElementById("address").value = user.address || "";
    document.getElementById("phone").value = user.phone || "";
  }

  // Evento de envio do formulário
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const user = {
      name: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      cpf: document.getElementById("cpf").value,
      address: document.getElementById("address").value,
      phone: document.getElementById("phone").value,
    };
    saveToLocalStorageAndUpdateSession(user);
    alert("Dados salvos com sucesso!");
  });

  // Preencher o formulário ao carregar a página
  fillForm();
});
