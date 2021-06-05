import React from 'react'
import styled from 'styled-components'


const DetailsDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    font-family: ${props => props.theme.normal};
    font-size: 1.5rem;
    align-self: stretch;
`
const FormDiv = styled.form`
    margin: 0 20% 0 5%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items:center;
    & input{
        width:40%;
    }
`

const LabelDiv = styled.label`
    width: 30%;
`
const LabelInput = styled.input`
    margin: 25px;
    padding: 5px;
`

const LabelSelect = styled.select`
    margin: 25px;
    padding: 5px;
`
export default function Form({member, onchange, submitData}){

    const { name, age, position } = member

    function preventSub(e){
        e.preventDefault();
        submitData();
    }
    return(
        <FormDiv>
            <DetailsDiv>
                <LabelDiv>
                    Name
                    <LabelInput type="text" name="name" placeholder="name" maxLength="32" onChange={onchange} value={name} />
                </LabelDiv>
                <LabelDiv>
                    Age
                    <LabelInput type="number" name="age" placeholder="age" maxLength="3" onChange={onchange} value={age}/>
                </LabelDiv>
                <LabelDiv>
                    Position
                    <LabelSelect onChange={onchange} name="position" value={position}>
                        <option disabled>Position</option>
                        <option value="Safety">Safety</option>
                        <option value="CornerBack">CornerBack</option>
                        <option value="End">End</option>
                        <option value="Tackle">Tackle</option>
                        <option value="Outside LineBacker">Outside LineBacker</option>
                        <option value="Middle LineBacker">Middle LineBacker</option>
                    </LabelSelect>
                </LabelDiv>
            </DetailsDiv>
            <LabelInput type="submit" onClick={preventSub}/>
        </FormDiv>
    )
}