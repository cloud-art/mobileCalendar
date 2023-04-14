import React from 'react'
import { FiPlus } from 'react-icons/fi'
import styled from 'styled-components'

const StyledCalendarHeader = styled.div`
box-sizing: border-box;
width: 100%;
padding: 2em;
border-bottom: 1px solid rgb(235, 235, 235);
`

const StyledFlexContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const StyledSpanTitle = styled.span`
font-size: 1.5em;
font-weight: 400;
color: rgb(77, 77, 77);
`

const StyledSpanAddNew = styled.div`
display: flex;
font-size: 2em;
text-align: center;
color: rgb(255, 49, 49);
`

const CalendarHeader = () => {
    return (
        <StyledCalendarHeader>
            <StyledFlexContainer>
                <StyledSpanTitle>Interview Calendar</StyledSpanTitle>
                <StyledSpanAddNew><FiPlus /></StyledSpanAddNew>
            </StyledFlexContainer>
        </StyledCalendarHeader>
    )
}

export default CalendarHeader