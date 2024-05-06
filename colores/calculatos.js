let botones = [
    document.querySelector('#suma'),
    document.querySelector('#resta'),
    document.querySelector('#multiplicacion'),
    document.querySelector('#division')
];

let resultado = document.querySelector('#resultado');

botones[0].addEventListener('click', function suma() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    resultado.innerText = `${num1 + num2}`;
});

botones[1].addEventListener('click', function resta() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    resultado.innerText = `${num1 - num2}`;
});

botones[2].addEventListener('click', function multiplicacion() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    resultado.innerText = `${num1 * num2}`;
});

botones[3].addEventListener('click', function division() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    resultado.innerText = `${num1 / num2}`;
});