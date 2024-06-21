import { ConverterAPI } from "../api/api";

const SET_EXCHANGE = 'SET_EXCHANGE';
const CONVERT_CURRENCY = 'CONVERT_CURRENCY';

let initialState = {
    pair: {
        to: undefined,
        from: undefined
    },
    amount: undefined,
    fullExchange: [],
    result: undefined
}

const converterReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_EXCHANGE: {
            return {
                ...state,
                fullExchange: [...action.fullExchange]
            }
        }

        case CONVERT_CURRENCY: {
            return {
                ...state,
                amount: action.amount,
                pair: { ...state.pair, from: action.from, to: action.to },
                result: action.result
            }
        }

        default: {
            return state;
        }
    }
}

export const setExchangeActionCreator = (fullExchange) => {
    return {
        type: SET_EXCHANGE, 
        fullExchange
    }
}

export const convertCurrencyActionCreator = (amount, from, to, result) => {
    return {
        type: CONVERT_CURRENCY,
        amount,
        from,
        to,
        result
    }
}

export const setExchangeThunk = () => {
    return async (dispatch) => {
        let response = await ConverterAPI.getExchange();
        if (response.data.result === "success") {
            dispatch(setExchangeActionCreator(response.data.supported_codes));
        }
    }
}

export const convertCurrencyThunk = (from, to, amount) => {
    return async (dispatch) => {
        let response = await ConverterAPI.convertCurrency(from, to, amount);
        let newData = {
            baseCode: response.data.base_code,
            targetCode: response.data.target_code,
            result: response.data.conversion_result,
            amount: response.data.conversion_result/response.data.conversion_rate
        }
        if (response.data.result === "success") {
            dispatch(convertCurrencyActionCreator(newData.amount.toFixed(0), newData.baseCode, newData.targetCode, newData.result.toFixed(2)));
        }
    }
}

export default converterReducers;