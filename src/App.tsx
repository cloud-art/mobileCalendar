import React from 'react';
import Calendar from './components/Calendar/Calendar';
import styled from 'styled-components'

const AppWrapper = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const StyledCalendarContainer = styled.div`
    width: 500px;
    height: 740px;
`

function App() {
    return (
        <AppWrapper>
            <StyledCalendarContainer>
                <Calendar></Calendar>
            </StyledCalendarContainer>
        </AppWrapper>

    );
}

export default App;
