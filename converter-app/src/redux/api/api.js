import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://v6.exchangerate-api.com/v6/a81f9286234435cdc316fa12/',
    headers: {
        'API-KEY': 'a81f9286234435cdc316fa12'
    }
});

export const ConverterAPI = {
    getExchange() {
        return axios.get('https://v6.exchangerate-api.com/v6/a81f9286234435cdc316fa12/codes');
    },
    convertCurrency(from, to, amount) {
        return axios.get(`https://v6.exchangerate-api.com/v6/a81f9286234435cdc316fa12/pair/${from}/${to}/${amount}`);
    }
}