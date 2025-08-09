import React, { createContext, useState } from 'react';

export const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState({
    first_name: '',
    last_name : '',
    number : '',
    gmail : '',
    bio: '',
    experience:[],
    education:[],
    skills : [],
    projects: [],
    certifications:[],
    languages:[],
  });

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
}