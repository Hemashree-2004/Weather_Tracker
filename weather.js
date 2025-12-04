   document.getElementById("searchBtn").addEventListener("click", getWeather);

async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "d887fe0b691580fee1f50c41723c525b";

    if (city === "") 
    {
        alert("Please enter a city name");
        return;
    }

    const url = 
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod != 200) {
            document.getElementById("weather").innerHTML =
                `<p style="color:red;">City not found ❌</p>`;
            return;
        }

        document.getElementById("weather").innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
            <p><b>Temperature:</b> ${data.main.temp}°C</p>
            <p><b>Humidity:</b> ${data.main.humidity}%</p>
            <p><b>Wind Speed:</b> ${data.wind.speed} m/s</p>
            <p><b>Condition:</b> ${data.weather[0].main}</p>
        `;
    } catch (error) {
        document.getElementById("weather").innerHTML =
            `<p style="color:red;">Error fetching data ⚠</p>`;
    }
}
