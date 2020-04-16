import React from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { REGISTER_USER } from '../graphql/mutations';
import { FormInput } from './FormInput';
import { PrimaryButton } from '../styling/appearance'
import { FlexColHorCenter } from '../styling/internalLayout'

const StyledForm = styled(FlexColHorCenter).attrs({ as: "form"})`
    font-family: 'Roboto';
    width: 400px;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
    padding: 32px 40px;
    background-color: #fff;

    @media (max-width: 704px) {
        width: 100vw;
        padding: 0;
    }
`;

export const SignUpForm = () => {

    const [registerUser, { data }] = useMutation(REGISTER_USER);

    const signUpSubmit = (e) => {

    };

    return (
        <StyledForm>
            <FormInput label={'name'} />
            <FormInput label={'email'} type={'email'}/>
            <FormInput label={'password'} type={'password'}/>
            <PrimaryButton width={'100%'}>Sign-Up</PrimaryButton>
        </StyledForm>
    )
}
