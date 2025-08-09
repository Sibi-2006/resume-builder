import React from 'react'

export default function Languages({
  languageLevel,
  setLanguageLevel,
  languageName,
  setLanguageName,
  addLanguage
}) {
  return (
    <div className='inputs'>
      <h1>Languages</h1>
      <input 
        type="text"
        placeholder='Language name'
        value={languageName}
        onChange={e => setLanguageName(e.target.value)}
      />
      <select value={languageLevel} onChange={e => setLanguageLevel(e.target.value)} className='submit-btn'>
        <option value="">--level--</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Fluent">Fluent</option>
      </select>
      <button type="button" onClick={addLanguage} className='submit-btn'>Add Language</button>
    </div>
  );
}
