import s from './Converter.module.css';

let ConverterResult = (props) => {
    return (
        <div className={s.currency_results}>
            <div className={`${s.currency_result} ${s.currency_result_from}`}>
                <div className={s.result_body}>
                    <div className={s.body_text}>
                        <div className={s.result_title}>{props.from}</div>
                        <div className={s.result_text}>{props.fullExchange.map(([ex, title]) => {
                            if(ex === props.from) {
                                return title;
                            }
                            })}</div>
                    </div>
                    <div className={s.result_amount}>{props.amount}</div>
                </div>
            </div>
            <div className={s.exactly_sign}><span>=</span></div>
            <div className={`${s.currency_result} ${s.currency_result_to}`}>
                <div className={s.result_body}>
                    <div className={s.body_text}>
                        <div className={s.result_title}>{props.to}</div>
                        <div className={s.result_text}>{props.fullExchange.map(([ex, title]) => {
                            if(ex === props.to) {
                                return title;
                            }
                        })}</div>
                    </div>
                    <div className={s.result_amount}>{props.result}</div>
                </div>
            </div>
        </div>
    );
}

export default ConverterResult;