import styled from 'styled-components';
import { BorderBox } from './externalLayout'

/* ==============================================================
All styling which affects the layout of an element's children 
(except BorderBox import)
============================================================== */

// FLEXBOX COMPONENTS ------------------------------------------

const Flex = styled(BorderBox)`
    display: flex;
`;

const FlexCol = styled(Flex)`
    flex-direction: column;
`;

export const FlexColHorCenter = styled(FlexCol)`
    align-items: center;
`;

export const FlexRowVertCenter = styled(Flex)`
    align-items: center;
`;

// GRID COMPONENTS ------------------------------------------

const Grid = styled(BorderBox)`
    display: grid;
`;

const CustomGrid = styled(Grid)`
    grid-template-rows: ${ props => props.rows ? props.rows : '1fr' };
    grid-template-columns: ${ props => props.cols ? props.cols : '1fr' };
    grid-template-areas: ${ props => props.areas ? props.areas : 'default' };
    grid-gap: ${ props => props.gap ? props.gap : '10px' };
`;

