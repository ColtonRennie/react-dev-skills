import './index.css'
import React, { useState } from 'react'
import SkillList from './components/SkillList'
import NewSkillForm from './components/NewSkillForm'

export default function App() {
  const [skills] = useState([
    { name: 'HTML', level: 5 },
    { name: 'CSS', level: 3 },
    { name: 'JavaScript', level: 4 },
    { name: 'Python', level: 2 },
  ])

  // function handleAddSkills(skill) {
  //   const newSkills = [...skills, skill]
  //   setSkills(newSkills)
  // }

  return (
    <div className='App'>
      <h1>React-Dev-Skills</h1>
      <SkillList skills={skills} />
      <hr />
      <NewSkillForm />
    </div>
  )
}
