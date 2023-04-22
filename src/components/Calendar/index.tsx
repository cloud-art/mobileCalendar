import React, { useState } from 'react'
import styled from 'styled-components'
import CalendarHeader from './components/CalendarHeader'
import CalendarBottom from './components/CalendarBottom'
import CalendarList from './components/CalendarList'
import CalendarGrid from './components/CalendarGrid'
import moment from 'moment'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useAction'
import { ISelectedDay } from '../../types/ISelectedDay'

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
    const [thisWeek, setThisWeek] = useState<moment.Moment>(moment())
    const startDay = thisWeek.clone().startOf('isoWeek')

    const selectedDay: ISelectedDay = useTypedSelector((state) => state.selectedDay)
    const { setSelectedDay, addEvent, removeEvent, setUpdating } = useActions()

    const previousWeekHandler = () => { setThisWeek((thisWeek) => thisWeek.clone().subtract(1, 'week')) }
    const todayWeekHandler = () => { setThisWeek(moment()) }
    const nextWeekHandler = () => { setThisWeek(thisWeek => thisWeek.clone().add(1, 'week')) }

    const handleDeleteEvent = () => {
        if (selectedDay.date) {
            removeEvent(selectedDay.date)
            setSelectedDay(null)
            setUpdating(false)
        }
    }

    const handleAddEvent = (date: string) => {
        if (moment(date, 'YYYY-MM-DD HH:mm:ss').isValid()) {
            const time = parseInt(moment(date, 'YYYY-MM-DD HH:mm:ss').format('X'))
            addEvent({ id: time, date: time, desc: 'added' })
        }
    }

    return (
        <StyledCalendar>
            <CalendarHeader
                handleAddEvent={handleAddEvent}
            />
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
                handleDeleteEvent={handleDeleteEvent}
            />
        </StyledCalendar>
    )
}

export default Calendar