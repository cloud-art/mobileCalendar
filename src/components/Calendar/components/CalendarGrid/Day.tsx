import React, { RefObject, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

interface DayProps {
    IsHaveEvent?: boolean,
    isSelected?: boolean,
    tabIndex?: number,
}

type StyledDayProps = {
    haveEvent?: boolean,
    selected?: boolean,
    tabIndex?: number,
}

const StyledDay = styled.div<StyledDayProps>`
height: 100%;
width: 100%;
background-color: ${({ haveEvent, selected }) => selected && 'rgb(179, 183, 255)' || haveEvent && 'rgb(235, 236, 255)' || 'white'};
&:focus{
    background-color: rgb(179, 183, 255);
}
`

const Day: React.FC<DayProps> = ({ tabIndex, isSelected, IsHaveEvent }) => {
    return (
        <StyledDay haveEvent={IsHaveEvent} selected={isSelected} tabIndex={tabIndex ? tabIndex : 0}>
        </StyledDay>
    )
}

export default Day