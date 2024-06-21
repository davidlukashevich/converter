import s from './Converter.module.css';
import btc from './../../btc.png';
import eth from './../../eth.png';
import FormConverter from './FormConverter';

const Converter = (props) => {
    return (
        <div className={s.currency_row}>
            <div className={s.currency_title}>Check live foreign currency exchange rates</div>
            <div className={s.currency_img_eth}>
                <img className={s.eth} src={eth} alt="eth" />
            </div>
            <div className={s.currency_body}>
                <FormConverter {...props} />
                <div className={s.currency_img_btc}>
                    <img className={s.btc} src={btc} alt="btc" />
                </div>
            </div>
        </div>
    );
}

export default Converter;