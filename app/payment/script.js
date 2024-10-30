const formapagm = document.getElementById('formapagm');

formapagm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const numcartao = document.getElementById('numcartao').value;
    const validade = document.getElementById('validade').value;
    const cvv = document.getElementById('cvv').value;

    // Validação dos dados
    if (!nome || !cpf || !numcartao || !validade || !cvv) {
        alert('Preencha todos os campos!!!');
        return;
    }

    // Salvar dados no localStorage
    const dadospag = {
        nome,
        cpf,
        numcartao,
        validade,
        cvv,
    };

    const localStorageData = localStorage.getItem('dadospag');
    let pagamentos = [];

    if (localStorageData) {
        pagamentos = JSON.parse(localStorageData);
    }

    pagamentos.push(dadospag);

    localStorage.setItem('dadospag', JSON.stringify(pagamentos));

    alert('Pagamento realizado com sucesso!!!');
});


