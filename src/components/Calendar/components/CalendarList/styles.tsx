import styled from "styled-components"

const StyledCalendarList = styled.div`
display: flex;
justify-content: flex-end;
width: 100%;
border-bottom: 1px solid rgb(235, 235, 235);
background-color: rgb(246, 246, 246);
`

const Day = styled.div<{ selected?: boolean }>`
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

const MonthWrapper = styled.div`
display: flex;
justifyContent='space-between'
`

export { StyledCalendarList, Day, MonthWrapper }