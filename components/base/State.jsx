import React, { useState } from 'react';
import styled from 'styled-components'
import StateHeader from './StateHeader'
import StateList from './StateList'
import StateInput from './StateInput'

const StyledState = styled.div`
    width: 300px;
    margin: 2rem;
    background-color: #ebecf0;
    padding: 10px;
    border-radius: 7px;
    box-shadow: 1px 1px 4px 4px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    height: 100%;
    
    
`;

const State = ({name, assign}) => {

    const [ cards, setCards ] = useState([])

    const onSend = ({card, description, assigned, person, date}) => {
        const content = [["Title: ", card],["Description: ", description],[(assigned + ": "), person],["Date: ", date]]
        setCards( [ ...cards, content ] )
    }

    return (
        <>
        <StyledState>
            <StateHeader name={name} />
            <StateList cards={cards} assigned={assign} />
            <StateInput onSend={ onSend } assigned={assign}/>
        </StyledState>
        </>
    )
};



export default State