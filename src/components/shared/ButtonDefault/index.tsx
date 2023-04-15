import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

interface ButtonDefaultProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const StyledButtonDefault = styled.button.attrs({
    outlined: true,
})`
width: inherit;
height: inherit;
border: none;
cursor: pointer;
background-color: inherit;
&:focus {
    outline: none;
}
`

const ButtonDefault: React.FC<PropsWithChildren<ButtonDefaultProps>> = ({ children, ...props }) => {
    return (
        <StyledButtonDefault {...props}>
            {children}
        </StyledButtonDefault>
    )
}

export default ButtonDefault