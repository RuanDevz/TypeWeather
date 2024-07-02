// WeatherAPI.ts
import axios from "axios";

export const Weatherapi = (city: string) => {
  return axios
    .get(`${import.meta.env.VITE_API_URL}`, {
      params: {
        q: city,
        appid: import.meta.env.VITE_API_KEY,
        lang: "pt_br",
        units: "metric",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
      throw error;
    });
};

// Função para obter sugestões de cidades

