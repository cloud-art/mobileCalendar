import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { DayWrapper, Grid, StyledCalendarGrid, Time } from './styles'
import Day from './Day'
import Text from '../../../shared/Text'
import moment from 'moment'
import ButtonDefault from '../../../shared/ButtonDefault'
import { IEvent } from '../../../../types/IEvent'

interface CalendarGridProps {
    startDay: moment.Moment;
    events: Array<IEvent>;
    selectedDay: IEvent | null;
    setSelectedDay: React.Dispatch<React.SetStateAction<IEvent | null>>;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
    startDay,
    events,
    setSelectedDay,
    selectedDay,
}) => {
    const day = startDay.clone().subtract(1, 'day')
    const timeArray = [...Array(24)].map(() => day.add(1, 'hour').clone())
    const daysArray = [...Array(7)].map(() => day.add(1, 'day').clone())

    return (
        <StyledCalendarGrid>
            {timeArray.map((hourElement, i) => {
                return (
                    <Grid>
                        {i + 1 != timeArray.length &&
                            <Time>
                                <Text color='grey'>
                                    {hourElement.format('HH:mm')}
                                </Text>
                            </Time>
                        }
                        {daysArray.map((dayElement, j) => {
                            return (
                                <DayWrapper>
                                    <ButtonDefault
                                        onClick={() => {
                                            setSelectedDay({
                                                id: parseInt(moment(dayElement.format("DD-MM-YYYY") + ' ' + hourElement.format('HH:mm'), 'DD-MM-YYYY HH:mm').format('X')),
                                                date: parseInt(moment(dayElement.format("DD-MM-YYYY") + ' ' + hourElement.format('HH:mm'), 'DD-MM-YYYY HH:mm').format('X')),
                                                desc: 'smth'
                                            })
                                        }}
                                    >
                                        {
                                            <Day
                                                IsHaveEvent={events.filter(event => moment(event.date, 'X').hour() == hourElement.hour() &&
                                                    moment(event.date, 'X').format('DD-MM-YY') == dayElement.format('DD-MM-YY')).length > 0}
                                                isSelected={parseInt(moment(dayElement.format("DD-MM-YYYY") + ' ' + hourElement.format('HH:mm'), 'DD-MM-YYYY HH:mm').format('X')) == selectedDay?.date}
                                                tabIndex={0}
                                            ></Day>
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