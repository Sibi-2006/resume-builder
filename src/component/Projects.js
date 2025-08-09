import React from 'react'

export default function Projects({projectName,setProjectName,projectDes,setProjectDes,addProject}) {
  return (
    <div className='inputs'>
    <h1>Projects :</h1>
      <input 
        type="text"
        placeholder='Project Name ?'
        value={projectName}
        onChange={e => setProjectName(e.target.value)}
    />
    <label htmlFor="description_for_project">Description for project : </label>
    <textarea
        value={projectDes}
        onChange={e=> setProjectDes(e.target.value)}
    ></textarea>
    <button onClick={addProject} type='button' className='submit-btn'>Add Projects..</button>
    </div>
  )
}
