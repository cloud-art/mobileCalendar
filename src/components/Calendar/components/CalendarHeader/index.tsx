import React from 'react'
import { FiPlus } from 'react-icons/fi'
import styled from 'styled-components'
import Text from '../../../shared/Text'
import Flex from '../../../shared/Flex'
import SvgContainer from '../../../shared/SvgContainer'

const StyledCalendarHeader = styled.div`
width: 100%;
padding: 2em;
border-bottom: 1px solid rgb(235, 235, 235);
`

const CalendarHeader = () => {
    return (
        <StyledCalendarHeader>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Text fontSize='big'>Interview Calendar</Text>
                <SvgContainer fontSize='2em' color='red'><FiPlus /></SvgContainer>
            </Flex>
        </StyledCalendarHeader>
    )
}

export default CalendarHeader