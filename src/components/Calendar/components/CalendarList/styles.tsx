import styled from "styled-components"

const StyledCalendarList = styled.div`
width: 100%;
padding: 5px 15px 5px 5em;
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

const StyledWeek = styled.div`
display: flex;
position: relative;
justify-content: center;
align-items: center;
`

const ArrowLeft = styled.span`
position: absolute;
left: 0;
`

const ArrowRight = styled.span`
position: absolute;
right: 0;
`

export { StyledCalendarList, StyledWeek, Day, ArrowLeft, ArrowRight }