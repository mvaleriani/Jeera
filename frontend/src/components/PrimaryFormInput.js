import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { TextInputField, Palatte } from '../styling/appearance';
import { FlexRowVertCenter } from '../styling/internalLayout'

const Field = styled(TextInputField)`
    width: 100%;
    height: 4rem;

    display: flex;
    flex-direction: column;
    padding: .5rem 1rem;
`;

const Input = styled.input`
    width: 100%;
    height: 1rem;
    background-color: inherit;
`;

const Label = styled(FlexRowVertCenter).attrs({as: "label"})`
    width: ${ props =>  props.labelAlt ? 'fit-content' : '100%'};
    font-size: ${ props => props.labelAlt ? '.7rem' : '.9rem'};
    margin: ${ props => props.labelAlt ? '0 0 .5rem 0' : '1rem 0 0 0'};
    font-weight: ${ props => props.labelAlt ? 'normal' : '500'};
    transition: all 100ms ease-in-out; 

    :hover {
        cursor: text;
    }
`;

const Asterisk = styled.span`
    color: ${Palatte.base.red};
    margin-left: 3px;
`;

const PrimaryFormInput = ({ name='', type='', value='', handleChange,  }) => {
    const [labelAlt, setLabelAlt] = useState(false);
    const inputRef = useRef(null);

    const handleInputFocus = (e) => {
        setLabelAlt(e.type === "focus" || value.length)
    }
    
    return (
        <Field onClick={e => { inputRef.current.focus() }}>
            <Label labelAlt={labelAlt}>
                { name.toUpperCase() }
                <Asterisk>*</Asterisk>
            </Label>
            <Input name={name} type={type} value={value} onChange={handleChange} ref={inputRef} onFocus={handleInputFocus} onBlur={handleInputFocus} />
        </Field>
    )
};

export default PrimaryFormInput;