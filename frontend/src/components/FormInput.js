import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useInput } from '../hooks/useInput'
import { StyledInputField } from '../themes/themes'

const Field = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 4rem;
    border: 2px solid;

    background-color: inherit;
    border-color: inherit;
    border-radius: 4px;
    :focus-within {
        border: 3px solid;
    }
    :hover {
        cursor: text;
    }

    display: flex;
    flex-direction: column;
    padding: .5rem;
    transition: all 150ms ease-in-out; 
`;

const Input = styled.input`
    width: 100%;
    height: 1rem;
    background-color: inherit;
`;

const Label = styled.label`
    width: ${ props =>  props.labelAlt ? 'fit-content' : '100%'};
    font-size: ${ props => props.labelAlt ? '.7rem' : '1rem'};
    margin: ${ props => props.labelAlt ? '0 0 .5rem 0' : '1rem 0 0 0'};
    font-weight: ${ props => props.labelAlt ? 'normal' : '500'};
    transition: all 100ms ease-in-out; 

    :hover {
        cursor: text;
    }
`;

export const FormInput = ({ label, type='' }) => {
    const { value, bind, reset } = useInput('');
    const [labelAlt, setLabelAlt] = useState(false);
    
    const inputRef = useRef(null);

    const handleInputFocus = (e) => {
        setLabelAlt(e.type === "focus" || value.length)
    }

    return (
        <StyledInputField>
            <Field onClick={e => { inputRef.current.focus() }}>
                <Label labelAlt={labelAlt}>{ label.toUpperCase() }</Label>
                <Input ref={ inputRef } type={type} { ...bind } onFocus={handleInputFocus} onBlur={handleInputFocus}/>
            </Field>
        </StyledInputField>
    )
};
