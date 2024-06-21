import { connect } from "react-redux";
import Converter from "./Converter";
import s from './Converter.module.css'
import { convertCurrencyThunk, setExchangeThunk } from "../../redux/reducers/converter-reducers";
import { useEffect } from "react";

const ConverterContainer = (props) => {
    useEffect(() => {
        props.setExchange();
    }, []);

    return (
        <div className={s.wrap}>
            <div className={s.container}>
                <div className={s.currency}>
                    <Converter {...props}/>
                </div>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        fullExchange: state.converter.fullExchange,
        result: state.converter.result,
        amount: state.converter.amount,
        from: state.converter.pair.from,
        to: state.converter.pair.to
    }
}


export default connect(mapStateToProps, {setExchange: setExchangeThunk, convertCurrency: convertCurrencyThunk})(ConverterContainer);