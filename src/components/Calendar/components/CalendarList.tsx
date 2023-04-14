import moment from 'moment'
import React from 'react'
import styled from 'styled-components'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const StyledCalendarList = styled.div`
box-sizing: border-box;
width: 100%;
padding: 5px 15px 5px 5em;
border-bottom: 1px solid rgb(235, 235, 235);
background-color: rgb(246, 246, 246);
`

const StyledListContainer = styled.div`
display: flex;
justify-content: flex-end;
`

const StyledDaysList = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

const StyledDay = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// &:not(:last-child){
//     padding-right: 40px;
// }
`

const DayFormatdd = styled.div`
font-size: 0.8em;
font-weight: 700;
`

const DayFormatDD = styled.div<{ selected?: boolean }>`
position: relative;
font-size: 1.5em;
width: 1.5em;
height: 1.5em;
text-align: center;
${props => props.selected ? `
    color: white;
    background: rgb(235, 59, 59);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
` : ``}
`

const StyledWeek = styled.div`
display: flex;
position: relative;
justify-content: center;
align-items: center;
`

const StyledWeekElement = styled.span`
box-sizing: content-box;
font-size: 1.2em;
font-weight: 500;
`

const ArrowLeft = styled.span`
display: flex;
position: absolute;
left: 0;
font-size: 1.5em;
color: rgb(255, 49, 49);
`

const ArrowRight = styled.span`
display: flex;
position: absolute;
right: 0;
font-size: 1.5em;
color: rgb(255, 49, 49);
`

const CalendarList = () => {
    const weeksArray = [...Array(7)]

    return (
        <StyledCalendarList>
            <StyledListContainer>
                <StyledDaysList>
                    {weeksArray.map((day, i) => {
                        return (
                            <StyledDay>
                                <DayFormatdd>{moment().day(i + 1).format('dd').substring(0, 1)}</DayFormatdd>

                                {moment().endOf('day').format('DDMMYYYY') == moment().day(i + 1).format('DDMMYYYY') ?
                                    <DayFormatDD selected={true}>{moment().day(i + 1).format('DD')}</DayFormatDD> :
                                    <DayFormatDD>{moment().day(i + 1).format('DD')}</DayFormatDD>}

                            </StyledDay>
                        )
                    })}
                </StyledDaysList>
            </StyledListContainer>
            <StyledWeek>
                <StyledWeekElement>{moment().format('MMMM YYYY')}</StyledWeekElement>
                <ArrowLeft><FiChevronLeft /></ArrowLeft>
                <ArrowRight><FiChevronRight /></ArrowRight>
            </StyledWeek>
        </StyledCalendarList>
    )
}

export default CalendarList