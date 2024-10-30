// Quando o documento HTML for carregado, executa a função
document.addEventListener("DOMContentLoaded", function () {
  // Obter os elementos do DOM
  const form = document.querySelector("form");
  const fdTableBody = document.querySelector(".frind-table tbody");

  // Função para salvar os dados no localStorage
  function saveToLocalStorage(friends) {
    localStorage.setItem("friends", JSON.stringify(friends));
  }

  // Função para obter os dados do localStorage
  function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem("friends")) || [];
  }

  // Função para renderizar a tabela
  function renderTable() {
    // Obter a lista de Amigos do localStorage
    const friends = getFromLocalStorage();
    // Limpar o conteúdo da tabela para renderizar novamente os Amigos do localStorage
    fdTableBody.innerHTML = "";
    // Repassa a lista de Amigos e renderiza cada um deles na tabela
    friends.forEach((fd, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${fd.fdcode}</td>
          <td>${fd.fdsurname}</td>d>
          <td style="display: flex; gap: 32px; justify-content: center">
            <button class="btn-edit" data-index="${index}"><i class="fa-solid fa-pencil"></i> Editar</button>
            <button class="btn-remove" data-index="${index}"><i class="fa-solid fa-trash"></i> Excluir</button>
          </td>
        `;
      fdTableBody.appendChild(row);
    });
  }

  // Função para adicionar um novo Amigo
  form.addEventListener("submit", function (event) {
    // Evitar o comportamento padrão do formulário
    event.preventDefault();
    // Obter os valores dos campos do formulário
    const fdcode = document.getElementById("code_friend").value;
    const fdsurname = document.getElementById("surname").value;
  
    // Obter a lista de Amigos do localStorage
    const friends = getFromLocalStorage();

    // Adicionar o novo Amigo à lista
    friends.push({ fdcode, fdsurname });
    // Salvar a lista atualizada no localStorage
    saveToLocalStorage(friends);
    // Renderizar a tabela
    renderTable();
    // Limpar os campos do formulário
    form.reset();
  });

  // Função para editar um Amigo
  fdTableBody.addEventListener("click", function (event) {
    // Verificar se o botão clicado é o botão de editar
    if (event.target.classList.contains("btn-edit")) {
      // Obter o índice do Amigo pelo atributo data-index
      const index = event.target.dataset.index;
      // Obter a lista de Amigos do localStorage
      const friends = getFromLocalStorage();
      // Obter o Amigo pelo índice
      const fd = friends[index];

      // Preencher o formulário com os dados do Amigo
      document.getElementById("code_friend").value = fd.fdcode;
      document.getElementById("surname").value = fd.fdsurname;

      // Remover o Amigo da lista
      friends.splice(index, 1);
      // Salvar a lista atualizada no localStorage
      saveToLocalStorage(friends);
      // Renderizar a tabela
      renderTable();
    }
  });

  // Função para excluir um Amigo
  fdTableBody.addEventListener("click", function (event) {
    // Verificar se o botão clicado é o botão de excluir
    if (event.target.classList.contains("btn-remove")) {
      // Obter o índice do Amigo pelo atributo data-index
      const index = event.target.dataset.index;
      // Obter a lista de Amigos do localStorage
      const friends = getFromLocalStorage();
      // Remover o Amigo da lista
      friends.splice(index, 1);
      // Salvar a lista atualizada no localStorage
      saveToLocalStorage(friends);
      // Renderizar a tabela
      renderTable();
    }
  });

  // Renderizar a tabela ao carregar a página
  renderTable();
});
