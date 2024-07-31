# atividadeJS
 <label for="cpf">CPF (XXX.XXX.XXX-XX):</label>
                <input type="text" id="cpf" maxlength="14" placeholder="123.456.789-00">
                <span id="cpf-error" class="error"></span>
                <input type="text" id="cpf" maxlength="14" placeholder="123.456.789-00">
                <span id="cpf-error" class="error"></span>
                document.addEventListener('DOMContentLoaded', () => {
    const cpfInput = document.getElementById('cpf');
    const cpfError = document.getElementById('cpf-error');
    const form = document.getElementById('cpf-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const cpfValue = cpfInput.value.replace(/\D/g, '');

        if (!isValidCPF(cpfValue)) {
            cpfError.textContent = 'CPF inválido.';
        } else {
            cpfError.textContent = '';
            alert('CPF válido!');
        }
    });

    // Adiciona formatação ao CPF conforme o usuário digita
    cpfInput.addEventListener('input', () => {
        cpfInput.value = cpfInput.value
            .replace(/\D/g, '')
            .replace(/^(\d{3})(\d{0,3})(\d{0,3})(\d{0,2})/, '$1.$2.$3-$4')
            .trim();
    });

    function isValidCPF(cpf) {
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

        let sum = 0;
        let remainder;

        for (let i = 1; i <= 9; i++) {
            sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
        }

        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cpf.charAt(9))) return false;

        sum = 0;
        for (let i = 1; i <= 10; i++) {
            sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
        }

        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        return remainder === parseInt(cpf.charAt(10));
    }
});

