import React from 'react'
import styled from 'styled-components'
import Text from '../../../shared/Text'
import Flex from '../../../shared/Flex'

const StyledCalendarBottom = styled.div`
border-sizing: border-box
width: 100%;
padding: 15px 25px;
border-top: 1px solid rgb(235, 235, 235);
background-color: rgb(246, 246, 246);
`

const CalendarBottom = () => {
    return (
        <StyledCalendarBottom>
            <Flex justifyContent='space-between' alignItems='center'>
                <Text fontSize='medium' color='red'>Today</Text>
                <Text fontSize='medium' color='red'>Delete</Text>
            </Flex>
        </StyledCalendarBottom>
    )
}

export default CalendarBottom