import React, {useCards} from 'react'
import styled from 'styled-components'


const StyledHeader = styled.div`
    text-align: center;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 300;
    color: #306B7F;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: solid 2px #DDD;
`;


const StateHeader = ({ name }) => {
    return <StyledHeader> { name } </StyledHeader>
}

export default StateHeader;