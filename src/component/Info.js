import React, { useContext ,useState } from 'react';
import { ResumeContext } from '../context/ResumeContext';

export default function Info({handleChange}) {
    const { resumeData, setResumeData } = useContext(ResumeContext);
    
  return (
    <div className='inputs'>
      <h1>Info :</h1>
      <input 
          type="text"
          name="first_name"
          placeholder="Enter your first name"
          value={resumeData.first_name}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="last_name"
          placeholder="Enter your last name"
          value={resumeData.last_name}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="gmail"
          placeholder="Enter your Gmail"
          value={resumeData.gmail}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="number"
          placeholder="Enter your phone number"
          value={resumeData.number}
          onChange={handleChange}
        />
        <label htmlFor="bio">Bio : </label>
        <textarea
        name='bio'
        value={resumeData.bio}
        onChange={handleChange}
        >
        </textarea>
    </div>
  )
}
