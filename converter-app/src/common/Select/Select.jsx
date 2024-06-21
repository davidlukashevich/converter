import { ErrorMessage, Field } from 'formik';
import s from '../../components/Сonverter/Converter.module.css';

const Select = ({ type, name, className, option, label }) => {
    return (
        <div>
            <div className={s.currency_subtitle}>{label}</div>
            <Field className={`${s.select} ${className}`} as={type} name={name} >
                <option value="">Choose currency</option>
                {option}
            </Field>
            <ErrorMessage name={name}>{(err) => <div className={s.currency_err}>{err}</div>}</ErrorMessage>
        </div>
    );
}

export default Select;