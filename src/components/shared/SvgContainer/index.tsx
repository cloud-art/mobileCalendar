import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

type StyledSvgContainerProps = {
    fontSize?: 'big' | 'medium' | 'small' | string;
    color?: 'red' | 'grey' | 'black' | string;
}

const StyledSvgContainer = styled.div<StyledSvgContainerProps>`
display: flex;
text-align: center;
font-size: ${({ fontSize }) =>
        fontSize == 'big' ? '1.5em'
            : fontSize == 'medium' ? '1.2em'
                : fontSize == 'small' ? '0.8'
                    : fontSize || '1em'
    };
color: ${({ color }) =>
        color == 'red' ? 'rgb(255, 49, 49)'
            : color == 'grey' ? 'rgba(192, 192, 192)'
                : color == 'black' ? 'rgb(3, 3, 3)'
                    : color || 'rgba(77, 77, 77)'};
`

const SvgContainer: React.FC<PropsWithChildren<StyledSvgContainerProps>> = ({
    children,
    fontSize,
    color,
}) => {
    return (
        <StyledSvgContainer
            fontSize={fontSize}
            color={color}
        >
            {children}
        </StyledSvgContainer>
    )
}

export default SvgContainer