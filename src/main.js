document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();

    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;

    if (numero1.trim() === '' || numero2.trim() === '') {
        alert('Por favor, preencha os dois números antes de somar.');
        return;
    }

    numero1 = Math.floor(parseFloat(numero1));
    numero2 = Math.floor(parseFloat(numero2));

    let resultado = numero1 + numero2;

    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerText = `A soma dos números é: ${resultado}`;
    resultadoElement.classList.add('mostrar');

    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
});
