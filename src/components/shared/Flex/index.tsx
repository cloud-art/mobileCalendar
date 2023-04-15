import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

type StyledFlexProps = {
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;
    margin?: string;
    width?: string;
}

const StyledFlex = styled.div<StyledFlexProps>`
display: flex;
flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
align-items: ${({ alignItems }) => alignItems || 'stretch'};
justify-content: ${({ justifyContent }) => justifyContent || 'stretch'};
margin: ${({ margin }) => margin || '0'};
width: ${({ width }) => width || 'auto'};
`

const Flex: React.FC<PropsWithChildren<StyledFlexProps>> = ({
    children,
    flexDirection,
    alignItems,
    justifyContent,
    margin,
    width,
}) => {
    return (
        <StyledFlex
            flexDirection={flexDirection}
            alignItems={alignItems}
            justifyContent={justifyContent}
            margin={margin}
            width={width}
        >
            {children}
        </StyledFlex>
    )
}

export default Flex