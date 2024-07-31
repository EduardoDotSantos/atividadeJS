# atividadeJS
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validação de CEP e CNPJ</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Validação de CEP e CNPJ</h1>

        <form id="form">
            <div class="field">
                <label for="cep">CEP (XXXXX-XXX):</label>
                <input type="text" id="cep" maxlength="10" placeholder="12345-678">
                <span id="cep-error" class="error"></span>
            </div>

            <div class="field">
                <label for="cnpj">CNPJ (XX.XXX.XXX/0001-XX):</label>
                <input type="text" id="cnpj" maxlength="18" placeholder="12.345.678/0001-95">
                <span id="cnpj-error" class="error"></span>
            </div>

            <button type="submit">Enviar</button>
        </form>
    </div>

    <script src="script.js"></script>
</body>
</html>
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const cepInput = document.getElementById('cep');
    const cnpjInput = document.getElementById('cnpj');
    const cepError = document.getElementById('cep-error');
    const cnpjError = document.getElementById('cnpj-error');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const cepValue = cepInput.value.replace(/\D/g, '');
        const cnpjValue = cnpjInput.value.replace(/\D/g, '');

        let isValid = true;

        // Validar CEP
        if (cepValue.length !== 8) {
            cepError.textContent = 'CEP deve ter 8 dígitos.';
            isValid = false;
        } else {
            cepError.textContent = '';
        }

        // Validar CNPJ
        if (cnpjValue.length !== 14) {
            cnpjError.textContent = 'CNPJ deve ter 14 dígitos.';
            isValid = false;
        } else {
            cnpjError.textContent = '';
        }

        if (isValid) {
            alert('Dados validados com sucesso!');
        }
    });

    // Adiciona formatação ao CEP e CNPJ conforme o usuário digita
    cepInput.addEventListener('input', () => {
        cepInput.value = cepInput.value
            .replace(/\D/g, '')
            .replace(/^(\d{5})(\d{0,3}).*/, '$1-$2');
    });

    cnpjInput.addEventListener('input', () => {
        cnpjInput.value = cnpjInput.value
            .replace(/\D/g, '')
            .replace(/^(\d{2})(\d{0,3})(\d{0,3})(\d{0,4})/, '$1.$2.$3/$4-')
            .trim();
    });
});

