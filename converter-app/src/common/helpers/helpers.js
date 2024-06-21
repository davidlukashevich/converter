import * as Yup from 'yup';

const amount = Yup.string().required("Enter amount");
const select_from = Yup.string().required("Select currency");
const select_to = Yup.string().required("Select currency");

export const schemas = {
    custom: Yup.object().shape({
        amount,
        select_from, 
        select_to
    })
}

export const initialValues = {
    amount: null,
    select_to: null,
    select_from: null
}