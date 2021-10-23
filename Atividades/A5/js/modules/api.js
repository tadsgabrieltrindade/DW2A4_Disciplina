const api = {
  estado(value) {
    let cepAPI = `https://viacep.com.br/ws/${value}/json/`;
    let newUrl;

    fetch(cepAPI)
      .then((resp) => resp.json())
      .then((data) => {
        data = Object.values(data);
        newUrl = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${data[5]}`;
      });
    return newUrl;
  },

  init(value) {
    let estadoPromise = new Promise((resolve, reject) => {
      if (value == 8) {
        resolve(api.estado(value));
      } else {
        reject("CEP Inválido");
      }
    });

    Promise.all(estadoPromise).then((contents) => {
      console.log(contents);
    });
  },
};

export default api;
