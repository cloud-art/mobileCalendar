import React from 'react'
import styled from 'styled-components'
import CalendarHeader from './components/CalendarHeader'
import CalendarBottom from './components/CalendarBottom'
import CalendarGrid from './components/CalendarGrid'
import CalendarList from './components/CalendarList'

const StyledCalendar = styled.div`
display: flex;
flex-direction: column;
box-sizing: border-box; 
width: 500px;
height: 740px;
border: 1px solid rgb(235, 235, 235);
box-shadow: 10px 5px 5px #888;
@media (max-height: 740px) {
    height:100%;
}
`

const Calendar: React.FC = ({ }) => {

    return (
        <StyledCalendar>
            <CalendarHeader />
            <CalendarList />
            <CalendarGrid />
            <CalendarBottom />
        </StyledCalendar>
    )
}

export default Calendar