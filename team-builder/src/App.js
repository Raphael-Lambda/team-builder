import Form from './components/Form'
import React, { useState } from 'react'
import Team from './components/Team'
import styled from 'styled-components'

const HeaderDiv = styled.div`
  padding-top: 10px;
  border-bottom: 3px dashed grey;
  background: #5ae89a;
  & h1{
    margin-left: 20%;
    font-size: 3rem;
  }
`


function App() {

  const defaultMember = {
    name: '',
    age: '',
    position: '',
    id: 0,
  }

  const [team1, setTeam] = useState([])
  const [member, setMember] = useState(defaultMember)

  function onchange (e){
    setMember({
      ...member,
      [e.target.name]: e.target.value,
      id: team1.length > 0 ?team1[team1.length - 1].id + 1: 1,
    })

  }

  function submitData(){
    if(!member.age || !member.name || !member.position) return
    console.log(member)
    console.log(team1)
    const newTeam = [...team1, member]
    console.log(newTeam)

    setMember(defaultMember)
    setTeam(newTeam)
  }

  function deleteMember(memberId){
    const newTeam = team1.filter((member) => member.id !== memberId)
    setTeam(newTeam)
  }

  return (
    <>
    <HeaderDiv>
      <h1>Team Builder Form</h1>
        <Form member={member} submitData={submitData} onchange={onchange}/>
    </HeaderDiv>
    <Team team1={team1} deleteMember={deleteMember}/>
  </>
    
  );
}

export default App;
