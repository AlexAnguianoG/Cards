import React , { useState }from 'react'
import styled from 'styled-components'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'


const StyledStateInput = styled.div`
    margin-top: 0.5rem;
`;

const StyledInputSection = styled.div`
    display:inline-flex;
    width: 100%;
    margin-bottom: 0.4rem;
`;

const StyledP = styled.p`
    color: #306B7F;
    width: auto;
    height: 28px;
    margin: 0;
    margin-right: 0.5rem;
    display: inline;
    font-weight: 300;
`;

const StyledButton = styled.button`
    outline: none;
    color: #73AEC2;
    background-color: #ebecf0;
    font-size: 20px;
    height: 25px;
    width: 100%;
    border: 1px solid #73AEC2;
    cursor: pointer;
    &:hover {
        color: white;
        background-color: #73AEC2;
    }
    &:active {
        color: #9199aa;
        background-color: #ebecf0;
        top: 1px;
    }
`;



const StateInput = ( { onSend, assigned } ) => {

    const [ card, setCard ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ person, setPerson  ] = useState("")


    var time = new Date();
    var ampm = time.getHours() >= 12 ? "pm" : "am";
    var date = time.getDate() + '/' + (time.getMonth() + 1) + '/' + time.getFullYear() + " " + time.getHours() + ":" + (time.getMinutes()<10?'0':'') + time.getMinutes()  + " " + ampm;

    
    return (
        <>
        <StyledStateInput>
            <StyledInputSection>
                <StyledP>Title</StyledP>
                <TextareaAutosize
                    placeholder="Add a title"
                    onChange={ (e) => setCard(e.target.value) } 
                    value={ card }
                    style={{ fontSize: 14, fontFamily: 'Segoe UI', padding: 4, paddingBottom: 6}}
                    class="txtarea"
                />
            </StyledInputSection>
            <StyledInputSection>
                <StyledP>Description</StyledP>
                <TextareaAutosize
                    placeholder="Add a description"
                    onChange={ (e) => setDescription(e.target.value) } 
                    value={ description }
                    rowsMin={2}
                    style={{ fontSize: 14, fontFamily: 'Segoe UI', padding: 4, paddingBottom: 6}}
                    class="txtarea"
                />
            </StyledInputSection>
            <StyledInputSection>
                <StyledP>{assigned}</StyledP>
                <TextareaAutosize
                    placeholder={assigned + "'s name" }
                    onChange={ (e) => setPerson(e.target.value) }
                    value={ person }
                    style={{ fontSize: 14, fontFamily: 'Segoe UI', padding: 4, paddingBottom: 6}}
                    class="txtarea"
                />
            </StyledInputSection>
            <StyledButton onClick={ 
                () => {
                    if (card && (description && person)){
                        onSend( {card, description, assigned, person, date} );
                    }
                }}
            >+</StyledButton>
        </StyledStateInput>
        </> 
    )
}

export default StateInput;