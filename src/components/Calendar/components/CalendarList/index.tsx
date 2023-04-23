import moment from 'moment'
import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SvgContainer from '../../../shared/SvgContainer'
import Text from '../../../shared/Text'
import { Day, StyledCalendarList } from './styles'
import Flex from '../../../shared/Flex'
import ButtonDefault from '../../../shared/ButtonDefault'
import GridRow from '../../../shared/GridRow'
import { useActions } from '../../../../hooks/useAction'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'

interface CalendarListProps {
}

const CalendarList: React.FC<CalendarListProps> = ({
}) => {
    const thisWeek = useTypedSelector(state => state.calendar.thisWeek)
    const startDay = useTypedSelector(state => state.calendar.startDay)
    const { setThisWeek } = useActions()

    const day = startDay.clone().subtract(1, 'day');
    const weekArray = [...Array(7)].map(() => day.add(1, 'day').clone())

    const previousWeekHandler = () => { setThisWeek(thisWeek.clone().subtract(1, 'week')) }
    const nextWeekHandler = () => { setThisWeek(thisWeek.clone().add(1, 'week')) }

    return (
        <StyledCalendarList>
            <Flex flexDirection='column' width='fit-content' margin='0.5em 0 0 0'>
                <GridRow>
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
                </GridRow>
                <Flex justifyContent='space-between' margin='0.5em 1em 0.5em 1em'>
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
            </Flex>

        </StyledCalendarList>
    )
}

export default CalendarList