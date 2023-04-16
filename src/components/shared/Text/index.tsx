import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { readBuilderProgram } from 'typescript';

type StyledTextProps = {
    fontSize?: 'big' | 'medium' | 'small' | string;
    color?: 'red' | 'grey' | 'black' | string;
    fontWeight?: string;
}

const StyledText = styled.span<StyledTextProps>`
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
                    : color == 'blue' ? 'rgb(0, 119, 255)'
                        : color || 'rgba(77, 77, 77)'
    };
font-weight: ${({ fontWeight }) => fontWeight || '500'};
`

const Text: React.FC<PropsWithChildren<StyledTextProps>> = ({
    children,
    fontSize,
    color,
    fontWeight
}) => {
    return (
        <StyledText
            fontSize={fontSize}
            color={color}
            fontWeight={fontWeight}
        >
            {children}
        </StyledText>
    )
}

export default Text