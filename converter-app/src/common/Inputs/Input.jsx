import { Field, ErrorMessage } from 'formik';
import s from '../../components/Сonverter/Converter.module.css';

const Input = ({type, placeholder, name, label}) => {
    return (
        <div className={s.currency_input_body}>
            <div className={s.currency_subtitle}>{label}</div>
            <Field className={s.currency_input} type={type} placeholder={placeholder} name={name} />
            <ErrorMessage name={name}>{(err) => <div className={s.currency_err}>{err}</div>}</ErrorMessage>
        </div>
    ); 
}

export default Input; 