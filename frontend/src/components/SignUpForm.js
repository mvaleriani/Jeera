import React from 'react';
import styled from 'styled-components';

import useForm from '../hooks/useForm'
import { useMutation } from '@apollo/react-hooks';
import { REGISTER_USER } from '../graphql/mutations';

import PrimaryFormInput from './PrimaryFormInput';
import { PrimaryButton } from '../styling/appearance';

import { FlexColHorCenter } from '../styling/internalLayout'

const Form = styled(FlexColHorCenter).attrs({ as: "form"})`
    font-family: 'Roboto';
    width: 400px;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
    padding: 32px 40px;
    background-color: #fff;
    border-radius: 4px;

    @media (max-width: 704px) {
        width: 100vw;
        padding: 0;
        box-shadow: none;
    }
`;

const SignUpForm = () => {
    const [registerUser, { data }] = useMutation(REGISTER_USER);
    
    const signUpSubmit = () => {
        registerUser({ variables: {
            ...fields
        }})
    };

    const [fields, handleChange, handleSubmit] = useForm(signUpSubmit);
    
    return (
        <Form onSubmit={ handleSubmit }>
            <PrimaryFormInput name={'name'} handleChange={handleChange} value={fields.name} />
            <PrimaryFormInput name={'email'} handleChange={handleChange} value={fields.email} type={'email'} />
            <PrimaryFormInput name={'password'} handleChange={handleChange} value={fields.password} type={'password'} />
            <PrimaryButton type={'submit'} width={'100%'}>Sign-Up</PrimaryButton>
        </Form>
    )
}

export default SignUpForm;