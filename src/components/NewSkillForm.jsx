import React from 'react'
import Select from './Select'
import './NewSkillForm.css'

export default function NewSkillForm() {
  // Application logic, etc. goes here
  return (
    <form className='NewSkillForm'>
      <label>
        Skill &nbsp;
        <input type='text' name='skill'></input>
      </label>
      <br />
      <label>
        Level
        <Select />
      </label>
      <button type='submit'>Add Skill</button>
    </form>
  )
}
