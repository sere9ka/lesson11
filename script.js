'use strict'

const btnButton = document.querySelector('#btn');
const btnSquare = document.querySelector('#e_btn');
const inputText = document.querySelector('#text');
const square = document.querySelector('#square');
const circle = document.querySelector('#circle');
const range = document.querySelector('#range');
const rangeSpan = document.querySelector('#range-span');
let valuesInput;

btnSquare.style.display = 'none';

const valueInput = function (event) {
    valuesInput = event.target.value;
}

inputText.addEventListener('input', valueInput);
const bkgcSquare = function () {
    square.style.backgroundColor = valuesInput
}
btnButton.addEventListener('click', bkgcSquare);

range.defaultValue = circle.width;
rangeSpan.textContent = range.value + '%'
const circleSize = function (event) {
    valuesInput = event.target.value;
    rangeSpan.textContent = valuesInput + '%'
    circle.style.width = valuesInput + '%';
    circle.style.height = valuesInput + '%';
}
range.addEventListener('input', circleSize);