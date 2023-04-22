import React from 'react';
import Calendar from './components/Calendar';
import styled from 'styled-components'

const AppWrapper = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

function App() {
    return (
        <AppWrapper>
            <Calendar></Calendar>
        </AppWrapper>

    );
}

export default App;
