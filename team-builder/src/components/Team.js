import React from 'react'
import Member from './Member'
import styled from 'styled-components'


const TeamDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`

export default function Team({team1, deleteMember}){

    return(
        <TeamDiv>
        {team1.map((member) => {
            return(
                <Member member={member} deleteMember={deleteMember}/>
            )
        })}
        </TeamDiv>
    )
}