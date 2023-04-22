import React, { PropsWithChildren } from 'react'
import Text from '../../../shared/Text'
import moment from 'moment'
import styled from 'styled-components'
import GridRow from '../../../shared/GridRow'

type CalendarRowProps = {
    key?: number,
    hourTime: moment.Moment,
    placeholder?: boolean,
}

const Time = styled.div`
position: absolute;
top: -10px;
left: -3em;
padding: 1px;
margin: -1px;
`

const CalendarRow: React.FC<PropsWithChildren<CalendarRowProps>> = ({
    hourTime,
    placeholder = true,
    children
}) => {
    return (
        <GridRow key={parseInt(hourTime.format('YYYYMMDDHHmm'))} backgroundColor='rgb(230, 230, 230)' border={true}>
            <Time>
                {
                    placeholder &&
                    < Text color='grey'>
                        {hourTime.format('HH:mm')}
                    </Text>
                }
            </Time>
            {children}
        </GridRow >
    )
}

export default CalendarRow