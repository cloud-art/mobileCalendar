import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { ISelectedDay } from '../../../../types/ISelectedDay'
import { useActions } from '../../../../hooks/useAction'
import { IEvent } from '../../../../types/IEvent'

interface DayProps {
    date: number,
    events?: Array<IEvent>,
}

type StyledDayProps = {
    haveEvent?: boolean,
    selected?: boolean,
}

const StyledDay = styled.div<StyledDayProps>`
height: 100%;
width: 100%;
cursor: pointer;
background-color: ${({ haveEvent, selected }) => selected && 'rgb(179, 183, 255)' || haveEvent && 'rgb(235, 236, 255)' || 'white'};
`

const Day: React.FC<DayProps> = memo(({ date, events }) => {
    const selectedDay: ISelectedDay = useTypedSelector(state => state.selectedDay)
    const { setUpdating, setSelectedDay } = useActions()
    const [selected, setSelected] = useState<boolean>(false)
    const [isHaveEvent, setHaveEvent] = useState<boolean>(events?.length ? true : false)

    useEffect(() => {
        setHaveEvent(events?.length ? true : false)
    }, [events])

    const onClickHandler = () => {
        setSelectedDay(date)
        isHaveEvent ? setUpdating(true) : setUpdating(false)
    }

    useEffect(() => {
        selectedDay.date == date ? setSelected(true) : setSelected(false)
    }, [selectedDay])

    return (
        <StyledDay haveEvent={isHaveEvent} selected={selected} tabIndex={-1}
            onClick={onClickHandler}
        >
        </StyledDay>
    )
})

export default Day