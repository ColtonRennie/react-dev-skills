import React from 'react'

export default function SkillListItem({ skill }) {
  return (
    <li className='SkillListItem'>
      {skill.name}
      {skill.level}
    </li>
  )
}
