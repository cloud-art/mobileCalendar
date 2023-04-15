import React from 'react'
import styled from 'styled-components'
import { Day, Grid, StyledCalendarGrid, Time } from './styles'
import Text from '../../../shared/Text'

const CalendarGrid = () => {
    const timeArray = [...Array(24)]
    const daysArray = [...Array(7)]
    return (
        <StyledCalendarGrid>
            {timeArray.map((e, i) => {
                return (
                    <Grid>
                        {i + 1 != timeArray.length &&
                            <Time>
                                <Text color='grey'>
                                    {i < 9 && "0"}{i + 1}:00
                                </Text>
                            </Time>
                        }
                        {daysArray.map((e, j) => {
                            return (
                                <Day></Day>
                            )
                        })

                        }
                    </Grid>
                )
            })}
        </StyledCalendarGrid>
    )
}

export default CalendarGrid