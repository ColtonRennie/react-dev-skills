import React from 'react'
import SkillListItem from './SkillListItem'

export default function SkillList({ skills }) {
  return (
    <ul className='padding-0'>
      {skills.map((skill, idx) => (
        <SkillListItem key={idx} skill={skill} />
      ))}
    </ul>
  )
}
