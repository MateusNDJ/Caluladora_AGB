const taxas = {
    olist: { porcentagem: 0.21, comissao: 5 },
    mercadoLivre: { porcentagem: 0.14, comissao: 6 },
    shopee: { porcentagem: 0.20, comissao: 4 },
    americanas: { porcentagem: 0.165, comissao: 0 },
    magalu: { porcentagem: 0.18, comissao: 5 }
};

function calcularVV() {
    const custo = parseFloat(document.getElementById('custo').value);
    const resultadoVV = custo * 2; // Exemplo, duplique o custo.
    document.getElementById('resultadoVV').innerText = `Valor de Venda: R$ ${resultadoVV.toFixed(2)}`;
}

function calcularPrecos() {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = '';

    for (const [marketplace, taxa] of Object.entries(taxas)) {
        const SV = valorVenda - (valorVenda * taxa.porcentagem) - taxa.comissao;
        const D = 6.5; // Valor fixo de falha
        const margem = (SV - D) / valorVenda;
        const precoFinal = valorVenda + (valorVenda * taxa.porcentagem) + taxa.comissao;

        const row = `<tr>
            <td>${marketplace.charAt(0).toUpperCase() + marketplace.slice(1)}</td>
            <td>R$ ${SV.toFixed(2)}</td>
            <td>R$ ${D.toFixed(2)}</td>
            <td>${(margem * 100).toFixed(2)}%</td>
            <td>R$ ${precoFinal.toFixed(2)}</td>
        </tr>`;
        resultados.innerHTML += row;
    }
}

// Função auxiliar para calcular o preço de venda no marketplace
function calcularPrecoVenda(valorVenda, porcentagem, comissao) {
    return (valorVenda + comissao) / (1 - porcentagem);
}
