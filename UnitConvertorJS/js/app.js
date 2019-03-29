function init() {
    load("temperature.html")
}

function load(page) {
    fetch(page)
        .then((response) => response.text())
        .then((html) => {
            document.getElementsByTagName("app")[0].innerHTML = html;
        })
        .catch((error) => {
            console.warn(error);
        });
}

function calculateTemperature(temp, convertTempFrom, convertTempTo) {
    if (convertTempTo === "Celsius") {
        switch (convertTempFrom) {
            case "Celsius": return temp;
            case "Fahrenheit": return (temp - 32) * 5 / 9;
            case "Kelvin": return temp - 273.15;
            default: break;
        }
    }

    if (convertTempTo == "Fahrenheit") {
        switch (convertTempFrom) {
            case "Fahrenheit": return temp;
            case "Celsius": return (temp * 9 / 5) + 32;
            case "Kelvin": return (temp - 273.15) * 9 / 5 + 32;
            default: break;
        }
    }

    if (convertTempTo == "Kelvin") {
        switch (convertTempFrom) {
            case "Kelvin": return temp;
            case "Fahrenheit": return (temp - 32) * 5 / 9 + 273.15;
            case "Celsius": return temp + 273.15;
            default: break;
        }
    }

    return;
}

function convertTemperature() {
    var temp = document.getElementById("temp").value;
    var convertTempTo = document.getElementById("convertTempTo").value;
    var convertTempFrom = document.getElementById("convertTempFrom").value;
    var result = document.getElementById("result");

    result.style.visibility = "visible";

    result.innerHTML = `
    <h2>Result</h2>
    <i>(Temperature: ${temp} ${convertTempFrom})</i> <br>
    <h3>Converts to: ${calculateTemperature(temp, convertTempFrom, convertTempTo)} ${convertTempTo}</h3>
    `;
}

function calculateVolume(volume, convertVolFrom, convertVolTo) {

    if (convertVolTo === "Litre") {
        switch (convertVolFrom) {
            case "Litre": return volume;
            case "Millilitre": return volume / 1000;
            case "Gallon": return volume * 3.785;
            default: break;
        }
    }

    if (convertVolTo == "Millilitre") {
        switch (convertVolFrom) {
            case "Millilitre": return volume;
            case "Litre": return volume * 1000;
            case "Gallon": return volume * 3785.412;
            default: break;
        }
    }

    if (convertVolTo == "Gallon") {
        switch (convertVolFrom) {
            case "Gallon": return volume;
            case "Millilitre": return volume / 3785.412;
            case "Litre": return volume / 3.785;
        }
    }

    return;
}

function convertVolume() {
    var vol = document.getElementById("vol").value;
    var convertVolTo = document.getElementById("convertVolTo").value;
    var convertVolFrom = document.getElementById("convertVolFrom").value;
    var result = document.getElementById("result");

    result.style.visibility = "visible";

    result.innerHTML = `
    <h2>Result</h2>
    <i>(Volume: ${vol} ${convertVolFrom})</i> <br>
    <h3>Converts to: ${calculateVolume(vol, convertVolFrom, convertVolTo)} ${convertVolTo}</h3>
    `;
}

init()