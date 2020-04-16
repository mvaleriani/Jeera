import styled from 'styled-components'

import {BorderBox} from './externalLayout'
/* =========================================================
All thematic styling which does not affect element layout
(except BorderBox import)
========================================================= */

const base = {
    gray: '#676b77',
    red: '#D9443F',
    green: '#69CE7A',
    purple: '#726FAB',
    yellow: '#EDDB68'
}

const accent = {
    gray: {
        'darken-55': '#010511',
        'darken-50': '#0e121e',
        'darken-45': '#1a1e2a',
        'darken-40': '#272b37',
        'darken-35': '#343844',
        'darken-30': '#414551',
        'darken-25': '#4d515d',
        'lighten-5': '#9a9eaa',
        'lighten-10': '#a7abb7',
        'lighten-15': '#b3b7c3',
        'lighten-20': '#c0c4d0',
        'lighten-25': '#cdd1dd',
        'lighten-30': '#dadeea'
    },
    red: {
        'darken-15': '#b31e19',
        'darken-10': '#c02b26',
        'darken-5': '#cc3732',
        'lighten-5': '#e6514c',
        'lighten-10': '#f35e59',
        'lighten-15': '#ff6a65'

        },
    green: {
        'darken-15': '#43a854',
        'darken-10': '#50b561',
        'darken-5': '#5cc16d',
        'lighten-5': '#76db87',
        'lighten-10': '#83e894',
        'lighten-15': '#8ff4a0'

    },
    purple: {
        'darken-15': '#4c4985',
        'darken-10': '#595692',
        'darken-5': '#65629e',
        'lighten-5': '#7f7cb8',
        'lighten-10': '#8c89c5',
        'lighten-15': '#9895d1'

    },
    yellow: {
        'darken-15': '#c7b542',
        'darken-10': '#d4c24f',
        'darken-5': '#e0ce5b',
        'lighten-5': '#fae875',
        'lighten-10': '#fff582',
        'lighten-15': '#ffff8e'
    }
}

export const Palatte = {
    base,
    accent
};

export const InputField = styled(BorderBox)`
    background-color: #fff;
    color: ${base.gray};
    border-radius: 4px;
    border: 2px solid ${accent.gray['lighten-25']};

    :hover {
        background-color: ${accent.gray['lighten-30']};
        color: ${accent.gray["darken-25"]};
        cursor: pointer;
    }
    :focus-within { 
        border: 3px solid ${base.gray};
        background-color: #f9f9f9;
    }
`;

export const TextInputField = styled(InputField)`
    :hover {
        cursor: text;
    }
`;

export const PrimaryButton = styled(BorderBox).attrs({ as: "button" })`
    background-color: ${accent.green["darken-5"]};
    color: #fff;
    padding: 10px 7px;
    border-radius: 4px;
    font-weight: 500;

    width: ${ props => props.width ? props.width : 'fit-content' };
    font-size: ${ props => props.fontSize ? props.fontSize : '1rem' };

    :hover, :focus{
        background-color: ${base.green};
        color: #fff;
    }

    transition: 100ms all ease-in-out;
`
