import React from 'react'
import styled from 'styled-components'

const StyledCalendarBottom = styled.div`
border-sizing: border-box
width: 100%;
padding: 15px 25px;
border-top: 1px solid rgb(235, 235, 235);
background-color: rgb(246, 246, 246);
`
const StyledTextContainer = styled.div`
display: flex;
justify-content: space-between;
align-items; center;
`

const StyledText = styled.span`
font-size: 20px;
color: rgb(255, 49, 49 );
`

const CalendarBottom = () => {
    return (
        <StyledCalendarBottom>
            <StyledTextContainer>
                <StyledText>Today</StyledText>
                <StyledText>Delete</StyledText>
            </StyledTextContainer>
        </StyledCalendarBottom>
    )
}

export default CalendarBottom