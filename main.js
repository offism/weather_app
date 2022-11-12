// const DATA = require("./axios");
// console.log(DATA);

async function getData(value) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=3d295bbf6a4ce696ed4c17593d593cfb`,
    {
      method: "GET",
    }
  );

  let data = await response.json();

  let Response = await fetch(
    `https://referential.p.rapidapi.com/v1/${data.name}`,
    {
      method: "GET",
      params: {
        fields:
          "currency,currency_num_code,currency_code,continent_code,currency,iso_a3,dial_code",
        limit: "250",
      },
      headers: {
        "X-RapidAPI-Key": "189a110550msh49626c470586409p11d17cjsn351fb799cf67",
        "X-RapidAPI-Host": "referential.p.rapidapi.com",
      },
    }
  );
  let Data = await Response.json();

  console.log(Data);
  //////////////////////////////

  // WEATHERCITY
  let cityName = document.createElement("h3");
  cityName.setAttribute("id", "cityName");
  cityName.textContent = data.name;
  let slash1 = document.createElement("span");
  slash1.setAttribute("id", "slash1");
  slash1.innerText = " | ";
  let country = document.createElement("h3");
  country.setAttribute("id", "country");
  country.textContent = data.sys.country;
  let weatherCity = document.createElement("div");
  weatherCity.setAttribute("id", "weatherCity");
  weatherCity.appendChild(cityName);
  weatherCity.appendChild(slash1);
  weatherCity.appendChild(country);
  // /////
  // //WEATHERCITYCOOR
  let weatherCityCoor = document.createElement("div");
  weatherCityCoor.setAttribute("id", "weatherCityCoor");
  let c1 = document.createElement("p");
  c1.setAttribute("id", "c1");
  c1.textContent = data.coord.lat;
  let slash2 = document.createElement("span");
  slash2.setAttribute("id", "slash1");
  slash2.textContent = " / ";
  let c2 = document.createElement("p");
  c2.setAttribute("id", "c2");
  c2.textContent = data.coord.lon;
  let flag = document.createElement("img");
  flag.setAttribute("id", "flag");
  flag.src = `https://countryflagsapi.com/png/${data.sys.country}`;
  weatherCityCoor.appendChild(c1);
  weatherCityCoor.appendChild(slash2);
  weatherCityCoor.appendChild(c2);
  weatherCityCoor.appendChild(flag);
  // //////

  let gradus = parseInt(Math.floor(((data.main.temp - 32) * 5) / 9));
  let humidityG = data.main.humidity;

  // //WEATHERBODY
  let weatherBody = document.createElement("div");
  weatherBody.setAttribute("id", "weatherBody");
  weatherBody.classList.add("clearfix");
  let weatherGrad = document.createElement("h3");
  weatherGrad.setAttribute("id", "weatherGrad");
  weatherGrad.textContent = gradus + " %";
  let weatherIcon = document.createElement("h3");
  weatherIcon.setAttribute("id", "weatherIcon");
  if (data.weather[0].main == "Clear") {
    weatherIcon.textContent = "☀️";
  } else if (data.weather[0].main == "Clouds") {
    weatherIcon.textContent = "☁️";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.textContent = "❄️";
  } else if (data.weather[0].main == "Fog") {
    weatherIcon.textContent = "🌬";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.textContent = "🌧";
  } else if (data.weather[0].main == "Sleet") {
    weatherIcon.textContent = "🌨";
  } else if (data.weather[0].main == "Storm") {
    weatherIcon.textContent = "💨";
  } else if (data.weather[0].main == "Thunder") {
    weatherIcon.textContent = "🌩";
  } else if (data.weather[0].main == "Rainbow") {
    weatherIcon.textContent = "🌈";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.textContent = "🌫";
  } else if (data.weather[0].main == "Haze") {
    weatherIcon.textContent = "🌫";
  } else if (data.weather[0].main == "Smoke") {
    weatherIcon.textContent = "⛈";
  } else weatherIcon.textContent = "oops! NO ICON";

  weatherBody.appendChild(weatherGrad);
  weatherBody.appendChild(weatherIcon);
  // ////////
  // // WEATHERFOOTER
  let weatherFooter = document.createElement("div");
  weatherFooter.setAttribute("id", "weatherFooter");
  let humanity = document.createElement("p");
  humanity.setAttribute("id", "humanity");
  humanity.textContent = "humidity: " + humidityG + " %";

  let wind = document.createElement("p");
  wind.setAttribute("id", "wind");
  wind.textContent = "wind: " + data.wind.speed + " km/h";

  let deg = document.createElement("p");
  deg.setAttribute("id", "deg");
  deg.textContent = "Deg: " + data.wind.deg + " °";

  weatherFooter.appendChild(humanity);
  weatherFooter.appendChild(wind);
  weatherFooter.appendChild(deg);
  //////

  // location
  let locationBox = document.createElement("div");
  locationBox.setAttribute("id", "locationBox");
  let location = document.createElement("p");
  location.setAttribute("id", "location");
  let i = document.createElement("i");
  i.classList.add("fas", "fa-map-marker-alt");
  location.innerText = " Location";
  locationBox.appendChild(i);
  locationBox.appendChild(location);
  ///
  //LINE
  let line = document.createElement("span");
  line.setAttribute("id", "line");
  line.innerText = "________";
  // locationBox.appendChild(gradus)
  ///  PART OF END
  weatherDATA.appendChild(weatherCity);
  weatherDATA.appendChild(locationBox);
  weatherDATA.appendChild(weatherCityCoor);
  weatherDATA.appendChild(weatherBody);
  weatherDATA.appendChild(weatherFooter);
  weatherDATA.appendChild(line);
}

button.onclick = () => {
  weatherDATA.innerHTML = null;
  if (input.value != "") {
    getData(input.value);
  } else if (input.value == false) {
    alert("Please , enter again!");
  } else alert("Please , enter again!");
};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
