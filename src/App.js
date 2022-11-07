import './index.css'
import React from 'react'
import SkillList from './components/SkillList'
import NewSkillForm from './components/NewSkillForm'

export default function App() {
  return (
    <div class='App'>
      <h1>React-Dev-Skills</h1>
      <SkillList />
      <hr />
      <NewSkillForm />
    </div>
  )
}
