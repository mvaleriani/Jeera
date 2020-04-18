import React from 'react'
import styled from 'styled-components'

import SignUpForm from '../SignUpForm'

import { FlexColHorCenter } from '../../styling/internalLayout'
const Section = styled(FlexColHorCenter)`
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const SignUpPage = () => {
    return (
        <Section id='sign-up-page'>
            <SignUpForm/>
        </Section>
    )
}
