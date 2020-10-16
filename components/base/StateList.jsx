import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Link from 'next/link'

const StyledList = styled.div`
    min-height: 233px;
`;

const StyledButton = styled.button`
    outline: none;
    margin-bottom: 5px;
    color: #306B7F;
    background-color: white;
    height: 20px;
    width: 100%;
    border: 1px solid #306B7F;
    cursor: pointer;
    &:hover {
        color: white;
        background-color: #73AEC2;
        border: 1px solid #73AEC2;
    }
`;

const StateList = ( { cards, description, assigned, person } ) => {
    return (
        <StyledList>
            {cards.map( (title) =>  
            <>
            <Card card={title} description={description} assigned={assigned} person={person} />
            <Link as={`/ShowCard`} href={`/[ShowCard]?t=${title}&d=${description}&a=${assigned}&p=${person}`}>
                <StyledButton>Show</StyledButton>
            </Link>
            </> )}

        </StyledList>
    )
}

/*
as={`/${title[0][1]}`} 
*/

export default StateList;