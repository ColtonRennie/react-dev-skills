import './index.css'
import React from 'react'
import SkillList from './components/SkillList'
import NewSkillForm from './components/NewSkillForm'

export default function App() {
  const skills = [
    { name: 'HTML', level: 5 },
    { name: 'CSS', level: 3 },
    { name: 'JavaScript', level: 4 },
    { name: 'Python', level: 2 },
  ]

  return (
    <div className='App'>
      <h1>React-Dev-Skills</h1>
      <SkillList skills={skills} />
      <hr />
      <NewSkillForm />
    </div>
  )
}
