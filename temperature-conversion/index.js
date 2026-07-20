const textbox = document.getElementById('textbox');
const toFarenheit = document.getElementById('toFarenheit');
const toCelcius = document.getElementById('toCelcius');
const result = document.getElementById('result');

let temp;


function convert() {
    if (toFarenheit.checked) {

        temp = Number(textbox.value);
        temp = ((9 / 5) * temp) + 32;
        result.textContent = temp.toFixed(1) + "°F"


    } else if (toCelcius.checked) {

        temp = Number(textbox.value);
        temp = (5 / 9) * (temp - 32)
        result.textContent = temp.toFixed(1) + "°C"

    } else {
        result.textContent = "Select a Unit"
    }
}