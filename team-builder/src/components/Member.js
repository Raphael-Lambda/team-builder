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

const H2Input = styled.input`
    text-align: center;
`

export default function Member({member , deleteMember, editMember, memberToEdit, memberToEditModif, saveModif}){
    const { age, name, position, id} = member

    function editChange(e){
        e.preventDefault();
        saveModif();
    }

   if(id === memberToEdit.id){
    return(
        <MemberDivM position={position}>
            <H2Input type="text" value={memberToEdit.name} onChange={memberToEditModif} name="name"/>
            <DetailsDiv >
                <label>
                    position
                    <select value={memberToEdit.position} onChange={memberToEditModif} name="position">
                        <option value="Safety">Safety</option>
                        <option value="CornerBack">CornerBack</option>
                        <option value="End">End</option>
                        <option value="Tackle">Tackle</option>
                        <option value="Outside LineBacker">Outside LineBacker</option>
                        <option value="Middle LineBacker">Middle LineBacker</option>
                    </select>
                </label>
                <label>
                    age
                    <input type="number" value={memberToEdit.age} onChange={memberToEditModif} name="age" />
                </label>
                <p>id: {id}</p>
            </DetailsDiv>
            <button onClick={() => deleteMember(id)}>Delete</button>
            <input type="submit" onClick={(e) => editChange(e)} />
        </MemberDivM>
    ) 
   }
   else{
    return(
        <MemberDivM position={position}>
            <h2>{name}</h2>
            <DetailsDiv >
                <p>position: {position}</p>
                <p>age: {age}</p>
                <p>id: {id}</p>
            </DetailsDiv>
            <button onClick={() => deleteMember(id)}>Delete</button>
            <button onClick={() => editMember(id)}>Edit</button>
        </MemberDivM>
    )
   }
}