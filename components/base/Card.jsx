import React from 'react';
import styled from 'styled-components'

const StyledTitle = styled.p`
    display: inline;
    overflow-wrap: break-word;
    font-weight: 500;
`;

const StyledElement = styled.p`
    display: inline;
    overflow-wrap: break-word;
    font-weight: 300;
`;

const StyledCard = styled.div`
    padding: 5px 5px;
    color: #306B7F;
    background-color: white;
    margin-top: 0.5rem;
    border-radius: 0.3rem;
    box-shadow: 1px 2px 0px 0px rgba(0,0,0,0.1);
    font-size: 0.9rem;
`;

const Card = ({ card }) => {
    return (
        <StyledCard>
            {card.map((s)=> s.map(
                (t,id)=> {
                    if (id==0){
                        return <StyledTitle>{t}</StyledTitle>
                    } else {
                        return <StyledElement>{t}<br/></StyledElement>
                    }
                }
            ))}
        </StyledCard>
    )
};

export default Card