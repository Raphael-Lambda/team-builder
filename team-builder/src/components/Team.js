import React from 'react'
import Member from './Member'
import styled from 'styled-components'


const TeamDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`

export default function Team({team1, deleteMember, editMember, memberToEdit, memberToEditModif, saveModif}){
    return(
        <TeamDiv>
        {team1.map((member) => {
            return(
                <Member key={member.id} member={member} deleteMember={deleteMember} editMember={editMember} memberToEdit={memberToEdit} memberToEditModif={memberToEditModif} saveModif={saveModif}/>
            )
        })}
        </TeamDiv>
    )
}