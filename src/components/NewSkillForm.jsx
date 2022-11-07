import React from 'react'
import Select from './Select'

export default function NewSkillForm() {
  // Application logic, etc. goes here
  return (
    <form className='NewSkillForm'>
      <label>
        Skill
        <input type='text' name='skill' />
      </label>
      <label>
        Level
        <Select />
      </label>
      <input type='submit' value='AddSkill' />
    </form>
  )
}
