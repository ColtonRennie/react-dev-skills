import React, { useState } from 'react'
import './NewSkillForm.css'

export default function NewSkillForm({ addSkill }) {
  const [newSkill, setNewSkill] = useState({
    name: '',
    level: 3,
  })

  function handleSubmit(e) {
    e.preventDefault()
    addSkill(newSkill)
    setNewSkill({ name: '', level: 3 })
  }
  function handleChange(e) {
    setNewSkill({ ...newSkill, [e.target.name]: e.target.value })
  }
  return (
    <form className='NewSkillForm' onSubmit={handleSubmit}>
      <label>
        Skill &nbsp;
        <input
          type='text'
          name='name'
          id='add-skill'
          placeholder='Add a New Skill'
          onChange={handleChange}
          value={newSkill.name}
          required
          pattern='.{3,}'
        ></input>
      </label>
      <br />
      <label>
        Level
        <select
          className='select'
          name='level'
          id='level'
          value={newSkill.level}
          onChange={handleChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>
      <button type='submit'>Add Skill</button>
    </form>
  )
}
