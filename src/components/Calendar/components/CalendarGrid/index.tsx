import React, { useEffect, useState } from 'react'
import Day from './Day'
import moment from 'moment'
import CalendarRow from './CalendarRow'
import styled from 'styled-components'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { IEvent } from '../../../../types/IEvent'
import { useActions } from '../../../../hooks/useAction'

interface CalendarGridProps {
    startDay: moment.Moment;
}

const StyledCalendarGrid = styled.div`
height: 100%;
width: 100%;
background-color: white;
overflow: scroll;
-ms-overflow-style: none;  /* Internet Explorer 10+ */
scrollbar-width: none;  /* Firefox */
 &::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
`

const DayWrapper = styled.div`
height: 100%;
width: 100%;
background-color: white;
`

const CalendarGrid: React.FC<CalendarGridProps> = ({
    startDay,
}) => {
    const daysDay = startDay.clone().subtract(1, 'day')
    const timeDay = daysDay.clone().subtract(1, 'hour')
    const daysArray = [...Array(7)].map(() => daysDay.add(1, 'day').clone())
    const timeArray = [...Array(24)].map(() => timeDay.add(1, 'hour').clone())

    const events: Array<IEvent> = useTypedSelector(state => state.events)

    return (
        <StyledCalendarGrid>
            {timeArray.map((hourElement, i) => {
                return (
                    <CalendarRow key={parseInt(hourElement.format('YYYYMMDDHHmm'))} hourTime={hourElement} placeholder={i == 0 ? false : true}>
                        {daysArray.map((dayElement) => {
                            return (
                                <DayWrapper key={parseInt(dayElement.format('X'))}>
                                    <Day
                                        // haveEvent={
                                        //     events.filter(event => moment(event.date, 'X').hour() == hourElement.hour() &&
                                        //         moment(event.date, 'X').format('DD-MM-YY') == dayElement.format('DD-MM-YY')).length > 0
                                        // }
                                        events={events.filter(event => moment(event.date, 'X').hour() == hourElement.hour() &&
                                            moment(event.date, 'X').format('DD-MM-YY') == dayElement.format('DD-MM-YY'))}
                                        date={parseInt(moment(dayElement.format("DD-MM-YYYY") + ' ' + hourElement.format('HH:mm'), 'DD-MM-YYYY HH:mm').format('X'))}
                                    ></Day>
                                </DayWrapper>
                            )
                        })}
                    </CalendarRow>
                )
            })}
        </StyledCalendarGrid>
    )
}

export default CalendarGrid