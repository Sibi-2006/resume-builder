import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';

export default function Resume() {
  const { resumeData } = useContext(ResumeContext);

  return (
    <div className="resume-container">
      

      
      
      {/* Name & Contact */}
      <div className='name-con'>
        <h1 className="name">
          <span className="first_name">{resumeData.first_name}</span>
          <span className="end_name"> {resumeData.last_name}</span>
        </h1>
        <p className="num_gmail">
          {resumeData.number} | {resumeData.gmail}
        </p>
      </div>

      <hr />
<div className='main'>
  <div className='row1'>
      {/* Bio */}
      {resumeData.bio?.length > 0 && (
        <div className='con'>
          <h1 className="title">Bio</h1>
          <p className="bio">{resumeData.bio}</p>
        </div>
      )}

      {/* Education */}
      {resumeData.education?.length > 0 && (
        <div className='con'>
          <h1 className="title">Education</h1>
          {resumeData.education.map((edu, index) => (
            <div key={index}>
              <ul>
                <li>
                  <strong>School:</strong> {edu.schoolName} ({edu.school_pass_out}, {edu.school_place}) <br />
                  <strong>College:</strong> {edu.collegeName} ({edu.college_pass_out}, {edu.college_place})
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Experience */}
      {resumeData.experience?.length >0 && (
        <div className='con'>
          <h1 className='title'>Experience</h1>
          {resumeData.experience.map((exp ,index)=>(
            <div key={index}>
              <h4>
                <strong>Company :</strong> {exp.Company}
                <br />
                <strong>Role : </strong> {exp.Role}
              </h4>
              <h3>{exp.StartDate} -To- {exp.EndDate}</h3>
              <p>{exp.Description}</p>
            </div>
          ))}
        </div>
      )}
  </div>
      {/* Skills & Certifications */}
      {(resumeData.skills?.length > 0 || resumeData.certifications?.length > 0) && (
  <div className='con'>
    <h1 className="title">Skills / Certifications</h1>
    <div className="skill_Certifications">
      {resumeData.skills?.length > 0 && (
        <div className="skill_con">
          <h4>Skills:</h4>
          <ul>
            {resumeData.skills.map((skill, index) => (
              <li key={index}>{skill.name} - {skill.level}</li>
            ))}
          </ul>
        </div>
      )}

      {resumeData.certifications?.length > 0 && (
        <div className="Certifications_con">
          <h4>Certifications:</h4>
          <ul>
            {resumeData.certifications.map((cert, index) => (
              <li key={index}>{cert.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
)}

      

      {/* Projects */}
      <div className='row1'>
      {resumeData.projects?.length > 0 && (
        <div className='con'>
          <h1 className="title">Projects</h1>
          <div className="project_con">
            <ul>
              {resumeData.projects.map((pro, index) => (
                <li key={index}>
                  <h3>{pro.ProjectName}</h3>
                  <p>{pro.projectDes}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      </div>

      {/* Languages */}
      {resumeData.languages?.length > 0 && (
        <div className='con'>
          <h1 className="title">Languages</h1>
          <div className="project_con">
            <ul>
              {resumeData.languages.map((lang, index) => (
                <li key={index}>
                  <h4>{lang.name} - {lang.level}</h4>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
