import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const StyledList = styled.div`
    min-height: 233px;
`;

const StateList = ( { cards, description, assigned, person } ) => {
    return (
        <StyledList>
            {cards.map( (title) =>  <Card card={title} description={description} assigned={assigned} person={person} /> )}
        </StyledList>
    )
}

export default StateList;