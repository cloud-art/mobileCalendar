import React from 'react'
import styled from 'styled-components'
import CalendarHeader from './components/CalendarHeader'
import CalendarBottom from './components/CalendarBottom'
import CalendarList from './components/CalendarList'
import CalendarGrid from './components/CalendarGrid'

const StyledCalendar = styled.div`
display: flex;
flex-direction: column;
box-sizing: border-box; 
width: 100%;
height: 100%;
border: 1px solid rgb(235, 235, 235);
`

function Calendar() {
    return (
        <StyledCalendar>
            <CalendarHeader></CalendarHeader>
            <CalendarList></CalendarList>
            <CalendarGrid></CalendarGrid>
            <CalendarBottom></CalendarBottom>
        </StyledCalendar>

    )
}

export default Calendar