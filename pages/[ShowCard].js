import React from 'react';
import styled from 'styled-components'
import { useRouter } from 'next/router';

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
    margin: 0.5rem 0;
    border-radius: 0.3rem;
    box-shadow: 1px 2px 0px 0px rgba(0,0,0,0.1);
    font-size: 0.9rem;
    width: 500px;
`;

const StyledDiv = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const StyledHeader = styled.h1`
    display: flex;
    justify-content: center;
    background-color: #EBECF0;
    color: #3D788C;
    margin: 0 0 1rem 0;
    padding: 0.7rem 0;
    font-size: 2rem;
    font-weight: 300;
    box-shadow: 1px 2px 2px 3px rgba(0,0,0,0.1);
`;

const Card = () => {

    const router = useRouter();
    console.log(router.query)
    const card = router.query.t.split(',');
  
    return (
        <>
        <StyledHeader>Show Card</StyledHeader>
        <StyledDiv>
            <StyledCard>
                {card.map(
                    (t,id)=> {
                        if (!(id & 1)){
                            return <StyledTitle>{t}</StyledTitle>
                        } else {
                            return <StyledElement>{t}<br/></StyledElement>
                        }
                            
                    }
                )}
            </StyledCard>
        </StyledDiv>
        </>
    )
};


export default Card