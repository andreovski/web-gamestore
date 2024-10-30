const tabhistorico = document.getElementById('tabhistorico');

const localStorageData = localStorage.getItem('dadospag');
const pagamentos = JSON.parse(localStorageData);

if (pagamentos) {
    pagamentos.forEach((pag, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${pag.nome}</td>
            <td>${pag.cpf}</td>
            <td>${pag.numcartao}</td>
            <td>${pag.validade}</td>
            <td>${pag.cvv}</td>
        `;

        tabhistorico.appendChild(row);
    });
}
