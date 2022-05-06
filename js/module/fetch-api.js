export default async function fecthApi(url){
    const infoFetch = document.querySelector('.info-fetch');

    try {
        infoFetch.classList.add('js-ativo-flex');
        const response = await fetch(url);
        const responseJson = await response.json();

        if(!response.ok) throw new Error('Erro ao acessar a api.');

        return { response, responseJson }
    } catch (error) {
        return error
    } finally{
        infoFetch.classList.remove('js-ativo-flex')
    }
}