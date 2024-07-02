import axios from "axios";

export const Cityapi = () => {
    return axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
      .then((response) => {
        return response.data;
      });
  }