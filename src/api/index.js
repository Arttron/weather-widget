import axios from "axios";

export function getWeatherByCity(city = "Kiev,ua") {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ff720068d4016c866e6032cef16e6508`);
}
