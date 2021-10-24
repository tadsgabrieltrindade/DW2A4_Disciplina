export async function consultarCep(value) {
  try {
    value = value.replace(/[^0-9]/, "");
    const url = `https://viacep.com.br/ws/${value}/json/`;
    const response = await fetch(url);
    const responseResult = await response.json();
    return responseResult;
  } catch (error) {
    console.log("Erro ao consultar CEP!\n" + error);
  }
}
