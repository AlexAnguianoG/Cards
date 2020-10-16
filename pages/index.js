import styled from 'styled-components';
import React from 'react';
import State from 'components/base/State';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
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

const CustomState = styled(State)`
    background-color: red;
`;

export default function Home() {
  return (
    <>
      <StyledHeader>Card</StyledHeader>
      <StyledDiv>
        <CustomState name="To Do" assign="Requester" />
        <CustomState name="In Progress" assign="Assignee" />
        <CustomState name="Done" assign="Assignee" />
      </StyledDiv>

    </>
  )
}
