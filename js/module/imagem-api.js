import fecthApi from "./fetch-api.js";

export default function imagemApi(){
    const url = 'https://api.thecatapi.com/v1/images/search';

    const promiseResultado = fecthApi(url);

    return promiseResultado;
}