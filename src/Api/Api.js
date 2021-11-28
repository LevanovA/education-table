import useFetch from 'use-http'

export default class NewApi {

    baseUrl = 'http://localhost:3000/';

    getResource = async (url = 'result', body) => {
        const res = fetch(`${this.baseUrl}${url}`, {
            method: 'GET'
        })
        console.log(111, res)
        return res;
    }

    //Получение данных таблицы
    getElements = async () => {
        return await this.getResource('result')
    }
}