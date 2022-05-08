export default async function fecthApi(url) {
  try {
    const response = await fetch(url);
    const responseJson = await response.json();

    if (!response.ok) throw new Error("Erro ao acessar a api.");

    return { response, responseJson };
  } catch (error) {
    return error;
  }
}
