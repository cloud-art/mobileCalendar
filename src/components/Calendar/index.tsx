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
        },
        {
            id: 1681783200,
            desc: 'do smth',
            date: 1681783200
        },
        {
            id: 1682049600,
            desc: 'do smth',
            date: 1682049600
        },
        {
            id: 1681704000,
            desc: 'do smth',
            date: 1681704000
        },
        {
            id: 1682035200,
            desc: 'do smth',
            date: 1682035200
        },
    ])

    const previousWeekHandler = () => { setThisWeek((thisWeek) => thisWeek.clone().subtract(1, 'week')) }
    const todayWeekHandler = () => { setThisWeek(moment()) }
    const nextWeekHandler = () => { setThisWeek(thisWeek => thisWeek.clone().add(1, 'week')) }

    const handleDeleteEvent = () => {
        selectedDay && setEvents(events.filter(obj =>
            parseInt(moment(obj.date, 'X').startOf('hour').format('X')) !== selectedDay.date
        ))
        setSelectedDay(null)
    }

    const handleAddEvent = (date: string) => {
        if (moment(date, 'YYYY-MM-DD HH:mm:ss').isValid()) {
            const time = parseInt(moment(date, 'YYYY-MM-DD HH:mm:ss').format('X'))
            setEvents([...events, { id: time, date: time, desc: '' }])
        }
    }

    useEffect(() => {
        events.find(e => parseInt(moment(e.date, 'X').startOf('hour').format('X')) == selectedDay?.date) ? setIsUpdating(true) : setIsUpdating(false)
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