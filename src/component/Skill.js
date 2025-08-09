import React from 'react'

export default function Skill({skillName , setSkillName ,addSkill,setSkillLevel}) {
  return (
    <div className='inputs'>
      <h1>Add Skills</h1>
        <input
          type="text"
          placeholder="Skill Name"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
        />

        <select onChange={(e) => setSkillLevel(e.target.value)} className='submit-btn'> 
          <option >--Level--</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Mid">Mid</option>
          <option value="Advanced">Advanced</option>
          <option value="Expert">Expert</option>
        </select>
        <button type="button" onClick={addSkill} className='submit-btn'>Add Skill</button>
    </div>
  )
}
