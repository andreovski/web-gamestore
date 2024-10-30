document.addEventListener("DOMContentLoaded", function () {
  const buyButtons = document.querySelectorAll(".btn-buy");

  // Função para verificar se existe um login no sessionStorage
  function checkLogin() {
    const user = sessionStorage.getItem("user");
    return user !== null;
  }

  // Função para habilitar ou desabilitar os botões de compra
  function updateBuyButtons() {
    const isLoggedIn = checkLogin();
    buyButtons.forEach((button) => {
      button.disabled = !isLoggedIn;
      button.innerHTML = isLoggedIn ? "Comprar" : "Login necessário";

      if (isLoggedIn) {
        button.addEventListener("click", function () {
          window.location.href = "./app/payment/index.html";
        });
      }
    });
  }

  // Verificar login ao carregar a página
  updateBuyButtons();
});
