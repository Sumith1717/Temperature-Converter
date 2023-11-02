function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const fromUnitSelect = document.getElementById("fromUnit");
    const resultSpan = document.getElementById("result");

    if (temperatureInput.value === "") {
        alert("Please enter a temperature.");
        return;
    }

    const temperature = parseFloat(temperatureInput.value);
    const fromUnit = fromUnitSelect.value;
    let result = 0;

    if (fromUnit === "celsius") {
        // Convert from Celsius
        result = {
            celsius: temperature,
            fahrenheit: (temperature * 9/5) + 32,
            kelvin: temperature + 273.15
        };
    } else if (fromUnit === "fahrenheit") {
        // Convert from Fahrenheit
        result = {
            celsius: (temperature - 32) * 5/9,
            fahrenheit: temperature,
            kelvin: (temperature - 32) * 5/9 + 273.15
        };
    } else if (fromUnit === "kelvin") {
        // Convert from Kelvin
        result = {
            celsius: temperature - 273.15,
            fahrenheit: (temperature - 273.15) * 9/5 + 32,
            kelvin: temperature
        };
    }

    resultSpan.innerHTML = `
        Celsius: ${result.celsius.toFixed(2)}°C<br>
        Fahrenheit: ${result.fahrenheit.toFixed(2)}°F<br>
        Kelvin: ${result.kelvin.toFixed(2)}K
    `;
}
