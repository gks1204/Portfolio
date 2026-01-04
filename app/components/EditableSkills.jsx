"use client"

import { useState } from 'react';

export default function EditableSkills({ initialSkills = [] }) {
  const [skills, setSkills] = useState(initialSkills.length > 0 ? initialSkills : [
    'UI/UX Design',
    'Brand Identity',
    'Wireframing & Prototyping',
    'Figma & Adobe Suite',
    'Usability Testing',
    'Social Media Design',
  ]);
  const [editing, setEditing] = useState(false);
  const [temp, setTemp] = useState([...skills]);

  function addSkill() {
    setTemp([...temp, '']);
  }

  function updateSkill(idx, val) {
    const newTemp = [...temp];
    newTemp[idx] = val;
    setTemp(newTemp);
  }

  function removeSkill(idx) {
    setTemp(temp.filter((_, i) => i !== idx));
  }

  function save() {
    setSkills(temp.filter(s => s.trim()));
    setEditing(false);
  }

  function cancel() {
    setTemp([...skills]);
    setEditing(false);
  }

  return (
    <section>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h3>Skills</h3>
        <button className="btn" onClick={() => editing ? cancel() : setEditing(true)} style={{fontSize:'0.9rem', padding:'0.5rem 1rem'}}>
          {editing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      {editing ? (
        <div style={{marginTop:'1rem'}}>
          {temp.map((skill, idx) => (
            <div key={idx} style={{display:'flex', gap:'0.5rem', marginBottom:'0.5rem'}}>
              <input 
                value={skill} 
                onChange={e => updateSkill(idx, e.target.value)}
                style={{flex:1, padding:'0.5rem', borderRadius:'6px', border:'1px solid var(--muted)', background:'var(--card)', color:'var(--text)'}}
                placeholder="Skill name"
              />
              <button onClick={() => removeSkill(idx)} className="btn outline" style={{fontSize:'0.9rem', padding:'0.5rem 0.8rem'}}>Remove</button>
            </div>
          ))}
          <button onClick={addSkill} className="btn outline" style={{fontSize:'0.9rem', padding:'0.5rem 1rem', marginTop:'0.5rem'}}>+ Add Skill</button>
          <button onClick={save} className="btn" style={{fontSize:'0.9rem', padding:'0.5rem 1rem', marginTop:'1rem'}}>Save Skills</button>
        </div>
      ) : (
        <ul className="grid skills-list" role="list">
          {skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
        </ul>
      )}
    </section>
  );
}
