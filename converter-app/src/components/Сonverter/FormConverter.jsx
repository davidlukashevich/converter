import Input from '../../common/Inputs/Input';
import Select from '../../common/Select/Select';
import { initialValues, schemas } from '../../common/helpers/helpers';
import s from './Converter.module.css';
import ConverterResult from './ConverterResult';
import { Form, Formik } from 'formik';

const FormConverter = (props) => {
    let exchangeElement = props.fullExchange.map(([ex]) => <option key={ex} value={ex}>{ex}</option>);

    let convert = (formData) => {
        props.convertCurrency(formData.select_from, formData.select_to, formData.amount);
    }

    return (
            <Formik
                initialValues={initialValues}
                validationSchema={schemas.custom}
                onSubmit={convert}>
                <Form className={s.currency_form}>
                    <div className={s.currency_form_body}>
                        <Input type={'number'} placeholder={'1.00'} name={'amount'} label={'Amount'} />
                        <Select type={'select'} name={'select_from'} label={'From'} className={s.currency_select_from} option={exchangeElement} />
                        <Select type={'select'} name={'select_to'} label={'To'} className={s.currency_select_to} option={exchangeElement} />
                    </div>
                    <button type='submit' className={s.currency_convert_btn}>Convert</button>
                    {props.result && <ConverterResult {...props} />}
                </Form>
            </Formik>
    );
}

export default FormConverter;