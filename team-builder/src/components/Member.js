import React from 'react'
import styled from 'styled-components'

const DetailsDiv = styled.div`
    font-family: ${props => props.theme.codeSnippetStyle};
    background: white;
    border: 2px dashed grey;
    padding:10px;
    color: grey;
`

const MemberDivM = styled.div`
    font-family: ${props => props.theme.normal};
    border: 2px solid grey;
    max-width: 33%;
    background: ${props => props.position === "CornerBack"? "#f48164":"lightblue"};
    margin: 15px;
    padding: 15px;
    & h2{
        text-align: center;
    }
    & button{
        margin-left: 40%;
        padding: 5px;
        &:hover{
            transform: scale(1.2);
            background: red;
            color: white;
        }
    }
`

export default function Member({member , deleteMember}){
    const { age, name, position, id} = member
   

    return(
        <MemberDivM position={position}>
            <h2>{name}</h2>
            <DetailsDiv >
                <p>position: {position}</p>
                <p>age: {age}</p>
                <p>id: {id}</p>
            </DetailsDiv>
            <button onClick={() => deleteMember(id)}>Delete</button>
        </MemberDivM>
    )
}