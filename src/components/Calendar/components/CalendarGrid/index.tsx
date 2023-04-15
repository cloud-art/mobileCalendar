import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Day, DayWrapper, Grid, StyledCalendarGrid, Time } from './styles'
import Text from '../../../shared/Text'
import moment from 'moment'
import ButtonDefault from '../../../shared/ButtonDefault'

interface CalendarGridProps {
    startDay: moment.Moment;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
    startDay,
}) => {
    const day = startDay.clone().subtract(1, 'day')
    const timeArray = [...Array(24)].map(() => day.add(1, 'hour').clone())
    const daysArray = [...Array(7)].map(() => day.add(1, 'day').clone())
    const events = [
        {
            desc: 'do smth',
            date: 1681565153
        },
        {
            desc: 'do smth',
            date: 1681506000
        }
    ]

    const handleDayClick = () => {
        console.log(moment(events[1].date, 'X').day())
    }

    useEffect(() => {
    }, [])

    return (
        <StyledCalendarGrid>
            {timeArray.map((hourElement, i) => {
                return (
                    <Grid>
                        {i + 1 != timeArray.length &&
                            <Time>
                                <Text color='grey'>
                                    {i < 9 && "0"}{i + 1}:00
                                </Text>
                            </Time>
                        }
                        {daysArray.map((dayElement, j) => {
                            return (
                                <DayWrapper>
                                    <ButtonDefault onClick={handleDayClick}>
                                        {
                                            events.filter(event => moment(event.date, 'X').hour() == hourElement.hour() &&
                                                moment(event.date, 'X').format('DD-MM-YY') == dayElement.format('DD-MM-YY')).length > 0 &&
                                            <Day haveEvent={true}></Day> ||
                                            <Day></Day>
                                        }
                                    </ButtonDefault>
                                </DayWrapper>
                            )
                        })}
                    </Grid>
                )
            })}
        </StyledCalendarGrid>
    )
}

export default CalendarGrid