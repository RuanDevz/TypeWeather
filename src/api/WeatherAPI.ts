import axios from "axios";
import { Climate, Cordenates } from "../context/context";


export const GetCoordinates = async (city: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${import.meta.env.VITE_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao obter latitude e longitude:", error);
    throw error;
  }
};

export const FiveDaysForecast = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&appid=${import.meta.env.VITE_API_KEY}&lang=pt`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao obter previsão de 5 dias:", error);
    throw error;
  }
};

export const WeatherApi = async (city: string): Promise<Climate[]> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}`, {
      params: {
        q: city,
        appid: import.meta.env.VITE_API_KEY,
        lang: "pt_br",
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};
