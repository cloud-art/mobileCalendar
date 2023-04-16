import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import CalendarHeader from './components/CalendarHeader'
import CalendarBottom from './components/CalendarBottom'
import CalendarList from './components/CalendarList'
import CalendarGrid from './components/CalendarGrid'
import moment from 'moment'
import { IEvent } from '../../types/IEvent'

const StyledCalendar = styled.div`
display: flex;
flex-direction: column;
box-sizing: border-box; 
width: 100%;
height: 100%;
border: 1px solid rgb(235, 235, 235);
box-shadow: 10px 5px 5px #888;
`

const Calendar: React.FC = ({ }) => {
    const [thisWeek, setThisWeek] = useState<moment.Moment>(moment())
    const [selectedDay, setSelectedDay] = useState<IEvent | null>(null)
    const [isUpdating, setIsUpdating] = useState<boolean>(false)
    const startDay = thisWeek.clone().startOf('isoWeek')
    const [events, setEvents] = useState([
        {
            id: 1681563600,
            desc: 'do smth',
            date: 1681563600,
        },
        {
            id: 1681506000,
            desc: 'do smth',
            date: 1681506000
        }
    ])

    const previousWeekHandler = () => { setThisWeek((thisWeek) => thisWeek.clone().subtract(1, 'week')) }
    const todayWeekHandler = () => { setThisWeek(moment()) }
    const nextWeekHandler = () => { setThisWeek(thisWeek => thisWeek.clone().add(1, 'week')) }

    const handleDeleteEvent = () => {
        selectedDay && setEvents(events.filter(obj => obj.date !== selectedDay.date))
        setSelectedDay(null)
    }

    const handleAddEvent = (date: string) => {
        if (moment(date, 'YYYY-MM-DD HH:mm:ss').isValid()) {
            const time = parseInt(moment(date, 'YYYY-MM-DD HH:mm:ss').format('X'))
            setEvents([...events, { id: time, date: time, desc: '' }])
        }
        console.log("added")
    }

    useEffect(() => {
        events.find(e => e.date == selectedDay?.date) ? setIsUpdating(true) : setIsUpdating(false)
        console.log(selectedDay)
        console.log(events)
    }, [selectedDay])

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
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                events={events}
                startDay={startDay}
            />
            <CalendarBottom
                todayWeekHandler={todayWeekHandler}
                isUpdating={isUpdating}
                handleDeleteEvent={handleDeleteEvent}
            />
        </StyledCalendar>

    )
}

export default Calendar