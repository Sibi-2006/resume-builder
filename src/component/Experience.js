import React, { useContext, useState } from 'react';
import { ResumeContext } from '../context/ResumeContext';

export default function Experience() {
    const { resumeData, setResumeData } = useContext(ResumeContext);
    const [experience, setExperience] = useState({
        company: '',
        role: '',
        startDate: '',
        endDate: '',
        description: '',
    });
    const [message, setMessage] = useState('');

    // ✅ Fix: Store the value entered by user, not the name
    const handleChange = (e) => {
        setExperience({
            ...experience,
            [e.target.name]: e.target.value
        });
    };

    const addExperience = () => {
        const { company, role, startDate, endDate, description } = experience;

        // ✅ Trim checks to prevent empty space submissions
        if (!company.trim() || !role.trim() || !startDate || !endDate || !description.trim()) {
            setMessage('⚠️ Please fill in all fields before adding.');
            return;
        }

        const newExperience = {
            Company: company.trim(),
            Role: role.trim(),
            StartDate: startDate,
            EndDate: endDate,
            Description: description.trim()
        };

        setResumeData((prev) => ({
            ...prev,
            experience: [...(prev.experience || []), newExperience]
        }));

        setMessage('✅ Your experience has been added!');
        setExperience({
            company: '',
            role: '',
            startDate: '',
            endDate: '',
            description: '',
        });
    };

    return (
        <div className='inputs'>
            <h1>Experience</h1>

            <input
                type="text"
                placeholder="Company Name"
                name="company"
                value={experience.company}
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder="Role"
                name="role"
                value={experience.role}
                onChange={handleChange}
            />

            <label>Start date: </label>
            <input
                type="date"
                name="startDate"
                value={experience.startDate}
                onChange={handleChange}
            />

            <label>End date: </label>
            <input
                type="date"
                name="endDate"
                value={experience.endDate}
                onChange={handleChange}
            />

            <label>Description: </label>
            <textarea
                name="description"
                value={experience.description}
                onChange={handleChange}
            ></textarea>

            <button type="button" onClick={addExperience} className='submit-btn'>Add experience</button>

            {message && (
                <p style={{ color: message.includes('⚠️') ? 'red' : 'green' }}>
                    {message}
                </p>
            )}

          
        </div>
    );
}
