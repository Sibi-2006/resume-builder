import React, { useContext, useState } from 'react';
import { ResumeContext } from '../context/ResumeContext';

export default function Education() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const [educationForm, setEducationForm] = useState({
    school: '',
    school_out: '',
    place_school: '',
    college: '',
    college_out: '',
    place_college: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEducationForm({
      ...educationForm,
      [e.target.name]: e.target.value
    });
  };

  const addEducation = () => {
    const { school, school_out, place_school, college, college_out, place_college } = educationForm;
    if (!school || !school_out || !place_school || !college || !college_out || !place_college) {
      setMessage('⚠️ Please fill in all fields before adding.');
      return;
    }

    const newEducation = {
      schoolName: school,
      school_pass_out: school_out,
      school_place: place_school,
      collegeName: college,
      college_pass_out: college_out,
      college_place: place_college
    };

    setResumeData((prev) => ({
      ...prev,
      education: [...(prev.education || []), newEducation]
    }));

    setMessage('✅ Your education has been added!');
    setEducationForm({
      school: '',
      school_out: '',
      place_school: '',
      college: '',
      college_out: '',
      place_college: ''
    });
  };

  return (
    <div className='inputs'>
      <h1>Education:</h1>

      <input
        type="text"
        name="school"
        placeholder="School"
        value={educationForm.school}
        onChange={handleChange}
      />
      <input
        type="text"
        name="school_out"
        placeholder="Pass out year (school)"
        value={educationForm.school_out}
        onChange={handleChange}
      />
      <input
        type="text"
        name="place_school"
        placeholder="Place of the school"
        value={educationForm.place_school}
        onChange={handleChange}
      />
      <input
        type="text"
        name="college"
        placeholder="College"
        value={educationForm.college}
        onChange={handleChange}
      />
      <input
        type="text"
        name="college_out"
        placeholder="Pass out year (college)"
        value={educationForm.college_out}
        onChange={handleChange}
      />
      <input
        type="text"
        name="place_college"
        placeholder="Place of the college"
        value={educationForm.place_college}
        onChange={handleChange}
      />

      <button type="button" onClick={addEducation} className='submit-btn'>Add Education</button>

      {message && <p style={{ color: message.includes('⚠️') ? 'red' : 'green' }}>{message}</p>}

      
    </div>
  );
}
