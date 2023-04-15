import React from 'react'
import styled from 'styled-components'
import Text from '../../../shared/Text'
import Flex from '../../../shared/Flex'
import ButtonDefault from '../../../shared/ButtonDefault';

interface CalendarBottomProps {
    todayWeekHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledCalendarBottom = styled.div`
border-sizing: border-box
width: 100%;
padding: 15px 25px;
border-top: 1px solid rgb(235, 235, 235);
background-color: rgb(246, 246, 246);
`

const CalendarBottom: React.FC<CalendarBottomProps> = ({
    todayWeekHandler,
}) => {
    return (
        <StyledCalendarBottom>
            <Flex justifyContent='space-between' alignItems='center'>
                <ButtonDefault onClick={todayWeekHandler}>
                    <Text fontSize='big' color='red'>Today</Text>
                </ButtonDefault>
                <ButtonDefault onClick={todayWeekHandler}>
                    <Text fontSize='big' color='red'>Delete</Text>
                </ButtonDefault>
            </Flex>
        </StyledCalendarBottom>
    )
}

export default CalendarBottom