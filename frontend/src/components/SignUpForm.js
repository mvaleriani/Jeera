import React from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { REGISTER_USER } from '../graphql/mutations';
import { FormInput } from './FormInput'

const StyledForm = styled.form`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 50%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
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
        </StyledForm>
    )
}
