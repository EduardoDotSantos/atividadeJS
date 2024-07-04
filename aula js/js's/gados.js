
function calcularPesos() {
    var pesoTotal = 0;
    var contador = 0;
    var pesoMinimo = Infinity;
    var pesoMaximo = -Infinity;

    while (true) {
        var pesoGado = parseFloat(prompt("Informe o peso do gado (ou 0 para sair):"));

        if (pesoGado === 0) {
            break;
        }

        pesoTotal += pesoGado;
        contador++;

        if (pesoGado < pesoMinimo) {
            pesoMinimo = pesoGado;
        }

        if (pesoGado > pesoMaximo) {
            pesoMaximo = pesoGado;
        }
    }

    if (contador > 0) {
        var mediaPeso = pesoTotal / contador;
        window.alert("Peso do menor gado:"+ pesoMinimo);
        window.alert("Peso do maior gado:"+ pesoMaximo);
        window.alert("Média de peso dos gados:"+ mediaPeso);
    } else {
        window.alert("Nenhum peso foi informado.");
    }
}

// Chamando a função para iniciar o cálculo
calcularPesos();
