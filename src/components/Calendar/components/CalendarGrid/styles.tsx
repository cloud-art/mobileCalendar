import styled from "styled-components";
import { readBuilderProgram } from "typescript";

const StyledCalendarGrid = styled.div`
height: 100%;
width: 100%;
background-color: white;
overflow: scroll;
`
const Grid = styled.div`
display: grid;
position: relative;
width: fit-content;
height: 3em;
margin-left: auto;
grid-template-columns: repeat(7, 3em);
grid-gap: 1px;
background-color: rgb(230, 230, 230);
&:not(:last-child){
    border-bottom: 1px solid rgb(230, 230, 230);
}
@media (max-width: 400px) {
    height: 2.5em;
    grid-template-columns: repeat(7, 2.5em);
}
@media (max-width: 340px) {
    height: 2em;
    grid-template-columns: repeat(7, 2em);
}

`

const Time = styled.div`
position: absolute;
bottom: -10px;
left: -3.5em;
padding: 1px;
margin: -1px;
`

const DayWrapper = styled.div`
height: 100%;
width: 100%;
background-color: white;
`

export { StyledCalendarGrid, Grid, Time, DayWrapper }