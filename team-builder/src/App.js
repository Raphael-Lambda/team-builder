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
    position: 'position',
    id: 0,
  }

  const [team1, setTeam] = useState([])
  const [member, setMember] = useState(defaultMember)
  const [memberToEdit, setMemberToEdit] = useState(defaultMember)

  function onchange (e){
    setMember({
      ...member,
      [e.target.name]: e.target.value,
      id: team1.length > 0 ?team1[team1.length - 1].id + 1: 1,
    })
  }

  function submitData(){
    if(!member.age || !member.name || member.position === 'position') return
    const newTeam = [...team1, member]
    setMember(defaultMember)
    setTeam(newTeam)
  }

  function deleteMember(memberId){
    const newTeam = team1.filter((member) => member.id !== memberId)
    setTeam(newTeam)
  }

  function editMember(memberId){
    const toEdit = team1.filter(member => member.id === memberId)
    setMemberToEdit(toEdit[0])
  }


  function memberToEditModif(e){
    setMemberToEdit({
      ...memberToEdit,
      [e.target.name]: e.target.value,
    })

  }

  function saveModif(){
    const oldTeam = team1.filter(member => member.id !== memberToEdit.id)
    const newTeam = [...oldTeam, memberToEdit]
    setMemberToEdit(defaultMember)
    setTeam(newTeam)
  }    

  return (
    <>
    <HeaderDiv>
      <h1>Team Builder Form</h1>
        <Form member={member} submitData={submitData} onchange={onchange}/>
    </HeaderDiv>
    {team1.length > 0 && <Team team1={team1} deleteMember={deleteMember} editMember={editMember} memberToEdit={memberToEdit} memberToEditModif={memberToEditModif} saveModif={saveModif}/>}
  </>
    
  );
}

export default App;
