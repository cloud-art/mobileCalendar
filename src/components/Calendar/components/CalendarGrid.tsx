import React from 'react'
import styled from 'styled-components'

const StyledCalendarGrid = styled.div`
height: 100%;
width: 100%;
background-color: white;
overflow: scroll;
`

const Grid = styled.div`
display: grid;
position: relative;
width: fit-content;
height: 3em;
margin-left: auto;
grid-template-columns: repeat(7, 3.5em);
grid-gap: 1px;
background-color: rgb(230, 230, 230);
&:not(:last-child){
    border-bottom: 1px solid rgb(230, 230, 230);
}
`

const Time = styled.div`
position: absolute;
bottom: -10px;
left: -3.5em;
z-index: 10;
background-color: white;
padding: 1px;
margin: -1px;
color: rgb(200, 200, 200);
`

const Day = styled.div`
height: 100%;
width: 100%;
background-color: white;
`

const CalendarGrid = () => {
    const timeArray = [...Array(24)]
    const daysArray = [...Array(7)]
    return (
        <StyledCalendarGrid>
            {timeArray.map((e, i) => {
                return (
                    <Grid>
                        {i + 1 != timeArray.length && <Time>{i < 9 && "0"}{i + 1}:00</Time>}
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