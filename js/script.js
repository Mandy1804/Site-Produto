
        function calcularTotal() {
            const precoUnitario = parseFloat(document.getElementById('Preço unitario').value);
            const quantidade = parseInt(document.getElementById('numero1').value);
            const cupom = document.getElementById('Cumpom').value.trim().toUpperCase();

            if (isNaN(precoUnitario) || isNaN(quantidade)) {
                document.getElementById('resultadoTotal').innerText = 'Por favor, insira valores válidos.';
                return;
            }

            let total = precoUnitario * quantidade;

            let desconto = 0;
            if (cupom === 'CUPOM10') {
                desconto = 0.10;
            } else if (cupom === 'CUPOM20') {
                desconto = 0.20;
            }

            const totalComDesconto = total - (total * desconto);

            document.getElementById('resultadoTotal').innerText = 
                `Total a pagar: R$ ${totalComDesconto.toFixed(2).replace('.', ',')}`;
        }
