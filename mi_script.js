const traducciones = {
    Clear: 'Despejado',
    Clouds: 'Nublado',
    Rain: 'Lluvioso',
    Sunny: "Soleado"
}
function traducirClima(clima) {
    return traducciones[clima] || clima;
}

document.getElementById("formClima").addEventListener("submit", function(e) {
    e.preventDefault();
    let city = document.getElementById("ciudad").value;
    let claveApi = '675a8108b9aef7bfcd40d919d7b4db5f';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${claveApi}`)
      .then(response => response.json())
      .then(data => {
 let clima = traducirClima(data.weather[0].main);
        let tempCelsius = Math.round(data.main.temp - 273.15);
        document.getElementById("resultado").innerHTML = 
          `El clima en ${data.name} esta ${clima}. La temperatura es de ${tempCelsius} °C.`;
      })
      .catch(error => console.error(`Error: ${error}`));
  });
