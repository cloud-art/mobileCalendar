import moment from 'moment'
import React, { useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SvgContainer from '../../../shared/SvgContainer'
import Text from '../../../shared/Text'
import { Day, StyledCalendarList } from './styles'
import Flex from '../../../shared/Flex'
import ButtonDefault from '../../../shared/ButtonDefault'

interface CalendarListProps {
    startDay: moment.Moment;
    thisWeek: moment.Moment;
    previousWeekHandler: React.MouseEventHandler<HTMLButtonElement>;
    nextWeekHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const CalendarList: React.FC<CalendarListProps> = ({
    startDay,
    thisWeek,
    previousWeekHandler,
    nextWeekHandler,
}) => {
    const day = startDay.clone().subtract(1, 'day');
    const weekArray = [...Array(7)].map(() => day.add(1, 'day').clone())

    return (
        <StyledCalendarList>
            <Flex justifyContent='flex-end'>
                <Flex justifyContent='space-between' width='100%'>
                    {weekArray.map((day, i) => {
                        return (
                            <Flex key={parseInt(day.format('X'))} flexDirection='column' justifyContent='center' alignItems='center'>
                                <Text fontSize='0.7em' fontWeight='700'>
                                    {day.format('dd').substring(0, 1)}
                                </Text>

                                {moment().endOf('day').format('DDMMYYYY') == day.format('DDMMYYYY') ?
                                    <Day selected={true}>{day.format('DD')}</Day> :
                                    <Day>{day.format('DD')}</Day>
                                }
                            </Flex>
                        )
                    })}
                </Flex>
            </Flex>
            <Flex justifyContent='space-between'>
                <ButtonDefault onClick={previousWeekHandler}>
                    <SvgContainer fontSize='big' color='red'>
                        <FiChevronLeft />
                    </SvgContainer>
                </ButtonDefault>
                <Text fontSize='medium'>{thisWeek.format('MMMM YYYY')}</Text>
                <ButtonDefault onClick={nextWeekHandler}>
                    <SvgContainer fontSize='big' color='red'>
                        <FiChevronRight />
                    </SvgContainer>
                </ButtonDefault>
            </Flex>
        </StyledCalendarList>
    )
}

export default CalendarList