import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Day, Grid, StyledCalendarGrid, Time } from './styles'
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
                                <Day>
                                    <ButtonDefault>
                                        {
                                            events.filter(event => moment(event.date, 'X').hour() == hourElement.hour() &&
                                                moment(event.date, 'X').day() == dayElement.day()).length > 0 &&
                                            <div style={{ width: `100%`, height: `100%`, backgroundColor: `rgb(235, 236, 255)` }}>
                                                1
                                            </div>
                                        }
                                    </ButtonDefault>
                                </Day>
                            )
                        })}
                    </Grid>
                )
            })}
        </StyledCalendarGrid>
    )
}

export default CalendarGrid