import React, { useContext ,useState } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import Experience from './Experience';
import Skill from './Skill';
import Education from './Education';
import Info from './Info';
import Projects from './Projects';
import Certifications from './Certifications';
import Languages from './Languages';
import '../Css/Form.css'
export default function PortfolioForm() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  // for skill
  const [skillName, setSkillName] = useState('');
  const [skillLevel, setSkillLevel] = useState('');

  const addSkill = () => {
    if (skillName && skillLevel) {
      const newSkill = { name: skillName, level: skillLevel };
      setResumeData((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill],
      }));
      setSkillName('');
      setSkillLevel('');
    }
  };
  //for projects
  const [projectName , setProjectName] = useState('')
  const [projectDes , setProjectDes] = useState('')

  const addProject = () =>{
    if(projectName && projectDes){
      const newProject = {ProjectName : projectName, projectDes : projectDes};
      setResumeData((prev) =>({
        ...prev,projects :[...prev.projects ,newProject ],
      }));
      setProjectName('');
      setProjectDes('');
    }
  }
  //Certifications
  const [certificationInput, setCertificationInput] = useState('');
const addCertification = () => {
  if (certificationInput) {
    const newCertification = { title: certificationInput };
    setResumeData((prev) => ({
      ...prev,
      certifications: [...prev.certifications, newCertification],
    }));
    setCertificationInput('');
  }
};

//Languages
const [languageName , setLanguageName] = useState('')
const [languageLevel , setLanguageLevel] = useState('');

const addLanguage = () =>{
  if(languageLevel && languageName){
    const newLanguage = {name : languageName , level : languageLevel}
    setResumeData((prev)=>({
      ...prev,languages:[...prev.languages ,newLanguage]
    }))
    setLanguageLevel('')
    setLanguageName('');
  }
}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  return (
    <div>
      <form>
        
        <Info 
          handleChange={handleChange}
        />

        <Education handleChange={handleChange} />

        

          <Skill 
            skillName={skillName}
            setSkillName={setSkillName}
            addSkill={addSkill}
            setSkillLevel={setSkillLevel}
            skillLevel={skillLevel}
          />
        <Experience />

        <Projects 
          projectName={projectName}
          setProjectName={setProjectName}
          projectDes={projectDes}
          setProjectDes={setProjectDes}
          addProject={addProject}
        />
        <Certifications
          certificationInput={certificationInput}
          setCertificationInput={setCertificationInput}
          addCertification={addCertification}
        />

        <Languages 
          languageLevel={languageLevel}
          setLanguageLevel={setLanguageLevel}
          languageName={languageName}
          setLanguageName={setLanguageName}
          addLanguage={addLanguage}
        />
      </form>
    </div>
  );
}