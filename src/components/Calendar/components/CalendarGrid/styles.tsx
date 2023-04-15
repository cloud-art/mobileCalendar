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
grid-template-columns: repeat(7, 3.5em);
grid-gap: 1px;
background-color: rgb(230, 230, 230);
&:not(:last-child){
    border-bottom: 1px solid rgb(230, 230, 230);
}
`

const Time = styled.div`
position: absolute;
bottom: -10px;
left: -3.5em;
z-index: 10;
padding: 1px;
margin: -1px;
`

const Day = styled.div<{ haveEvent?: boolean, selected?: boolean }>`
height: 100%;
width: 100%;
background-color: ${({ haveEvent, selected }) => haveEvent && 'rgb(235, 236, 255)' || selected && 'rgb(179, 183, 255)' || 'white'};
`
export { StyledCalendarGrid, Grid, Time, Day }