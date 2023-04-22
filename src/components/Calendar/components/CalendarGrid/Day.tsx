import React, { useEffect, useState } from 'react'
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

const Day: React.FC<DayProps> = ({ date, events }) => {
    const selectedDay: ISelectedDay = useTypedSelector(state => state.selectedDay)
    const { setUpdating, setSelectedDay } = useActions()
    const [selected, setSelected] = useState<boolean>(false)
    const [isHaveEvent, setHaveEvent] = useState<boolean>(events?.length ? true : false)

    useEffect(() => {
        setHaveEvent(events?.length ? true : false)
    }, [events])

    // const onClickHandler = () => {
    //     if (selectedDay.date == date) {
    //         setSelected(true)
    //     }
    // }

    const onFocusHandler = () => {
        setSelected(true)
        setSelectedDay(date);
        if (isHaveEvent) setUpdating(true); else setUpdating(false);
    }

    const onBlurHandler = () => {
        setSelected(false)
        setSelectedDay(null);
        setUpdating(false)
    }

    return (
        <StyledDay haveEvent={isHaveEvent} selected={selected} tabIndex={-1}
            // onClick={onClickHandler}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
        >
        </StyledDay>
    )
}

export default Day