import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

type GridRowProps = {
    backgroundColor?: string;
    border?: boolean;
}

const StyledGridRow = styled.div<GridRowProps>`
display: grid;
position: relative;
width: fit-content;
height: 3em;
margin-left: auto;
grid-template-columns: repeat(7, 3.5em);
grid-gap: 1px;
background-color: ${(({ backgroundColor }) => backgroundColor || `inherit`)};
${(({ border }) => border && `
&:not(:last-child){
    border-bottom: 1px solid rgb(230, 230, 230);
}
`)}
@media (max-width: 460px) {
    height: 3em;
    grid-template-columns: repeat(7, 3em);
}
@media (max-width: 400px) {
    height: 2.5em;
    grid-template-columns: repeat(7, 2.5em);
}
@media (max-width: 320px) {
    height: 2em;
    grid-template-columns: repeat(7, 2em);
}

`

const GridRow: React.FC<PropsWithChildren<GridRowProps>> = ({ children, backgroundColor, border, ...props }) => {
    return (
        <StyledGridRow
            {...props}
            backgroundColor={backgroundColor}
            border={border}
        >
            {children}
        </StyledGridRow>
    )
}

export default GridRow