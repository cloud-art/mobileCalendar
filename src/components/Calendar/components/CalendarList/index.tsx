import moment from 'moment'
import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SvgContainer from '../../../shared/SvgContainer'
import Text from '../../../shared/Text'
import { ArrowLeft, ArrowRight, Day, StyledCalendarList, StyledWeek } from './styles'
import Flex from '../../../shared/Flex'

const CalendarList = () => {
    const weeksArray = [...Array(7)]

    return (
        <StyledCalendarList>
            <Flex justifyContent='flex-end'>
                <Flex justifyContent='space-between' width='100%'>
                    {weeksArray.map((day, i) => {
                        return (
                            <Flex flexDirection='column' justifyContent='center' alignItems='center'>
                                <Text fontSize='0.7em' fontWeight='700'>{moment().day(i + 1).format('dd').substring(0, 1)}</Text>

                                {moment().endOf('day').format('DDMMYYYY') == moment().day(i + 1).format('DDMMYYYY') ?
                                    <Day selected={true}>{moment().day(i + 1).format('DD')}</Day> :
                                    <Day>{moment().day(i + 1).format('DD')}</Day>}

                            </Flex>
                        )
                    })}
                </Flex>
            </Flex>
            <StyledWeek>
                <Text fontSize='medium'>{moment().format('MMMM YYYY')}</Text>
                <ArrowLeft>
                    <SvgContainer fontSize='big' color='red'>
                        <FiChevronLeft />
                    </SvgContainer>
                </ArrowLeft>
                <ArrowRight>
                    <SvgContainer fontSize='big' color='red'>
                        <FiChevronRight />
                    </SvgContainer>
                </ArrowRight>
            </StyledWeek>
        </StyledCalendarList>
    )
}

export default CalendarList