import styled from 'styled-components'
import React from 'react'
import State from 'components/base/State'
import {StaticRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ShowCard from '../components/base/ShowCard';


const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const StyledTitle = styled.h1`
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
/*
const content = [["Title: ", "card"],["Description: ", "description"],[("assigned" + ": "), "person"],["Date: ", "date"]]

<Link to={`/${content}`} exact><li>Card</li></Link>

*/

const content = [["Title: ", "card"],["Description: ", "description"],[("assigned" + ": "), "person"],["Date: ", "date"]]
export default function Home() {
  return (
    <>
      <Router>
        <StyledTitle>Cards</StyledTitle>
        <ul>
        <Link to={`/${content[0][1]}`} exact><li>Card</li></Link>
        <Link to="/trello" exact ><li>Home</li></Link> 
        </ul>
        
        
        <Switch>
          <Route path="/" exact component={Trell} />
          <Route path="/trello/:id" exact component={ShowCard} />
        </Switch>
        
      </Router>
    </>
  )
}


const Trell = () => (
  <StyledDiv>
    <CustomState name="To Do" assign="Requester" />
    <CustomState name="In Progress" assign="Assignee" />
    <CustomState name="Done" assign="Assignee" />
  </StyledDiv>
)
