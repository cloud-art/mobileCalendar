import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CalendarHeader from './components/CalendarHeader'
import CalendarBottom from './components/CalendarBottom'
import CalendarList from './components/CalendarList'
import CalendarGrid from './components/CalendarGrid'
import moment from 'moment'

const StyledCalendar = styled.div`
display: flex;
flex-direction: column;
box-sizing: border-box; 
width: 100%;
height: 100%;
border: 1px solid rgb(235, 235, 235);
box-shadow: 10px 5px 5px #888;
`

function Calendar() {
    const [thisWeek, setThisWeek] = useState<moment.Moment>(moment())
    const startDay = thisWeek.clone().startOf('week')

    const previousWeekHandler = () => { setThisWeek((thisWeek) => thisWeek.clone().subtract(1, 'week')) }
    const todayWeekHandler = () => { setThisWeek(moment()) }
    const nextWeekHandler = () => { setThisWeek(thisWeek => thisWeek.clone().add(1, 'week')) }

    useEffect(() => {
        console.log("re-render")
    }, [startDay])


    return (
        <StyledCalendar>
            <CalendarHeader></CalendarHeader>
            <CalendarList
                startDay={startDay}
                thisWeek={thisWeek}
                previousWeekHandler={previousWeekHandler}
                nextWeekHandler={nextWeekHandler}
            />
            <CalendarGrid
                startDay={startDay}
            />
            <CalendarBottom
                todayWeekHandler={todayWeekHandler}
            />
        </StyledCalendar>

    )
}

export default Calendar