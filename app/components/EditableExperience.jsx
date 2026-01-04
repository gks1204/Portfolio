"use client"

import { useState } from 'react';

export default function EditableExperience({ initialExperience = [] }) {
  const defaultExperience = [
    {
      id: 1,
      title: 'UX/UI Designer',
      company: 'Apptix.io',
      period: '2023 – 2024',
      description: 'Led end-to-end UX/UI projects and usability testing.',
    },
    {
      id: 2,
      title: 'Graphic Designer',
      company: 'Angrybaaz Services',
      period: '2023',
      description: 'Created social media, print, and digital marketing creatives.',
    },
  ];

  const [experience, setExperience] = useState(initialExperience.length > 0 ? initialExperience : defaultExperience);
  const [editing, setEditing] = useState(false);
  const [temp, setTemp] = useState([...experience]);

  function addExperience() {
    setTemp([...temp, { id: Date.now(), title: '', company: '', period: '', description: '' }]);
  }

  function updateExp(idx, field, val) {
    const newTemp = [...temp];
    newTemp[idx][field] = val;
    setTemp(newTemp);
  }

  function removeExp(idx) {
    setTemp(temp.filter((_, i) => i !== idx));
  }

  function save() {
    setExperience(temp.filter(e => e.title && e.company && e.description));
    setEditing(false);
  }

  function cancel() {
    setTemp([...experience]);
    setEditing(false);
  }

  return (
    <section>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h3>Experience</h3>
        <button className="btn" onClick={() => editing ? cancel() : setEditing(true)} style={{fontSize:'0.9rem', padding:'0.5rem 1rem'}}>
          {editing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      {editing ? (
        <div style={{marginTop:'1rem'}}>
          {temp.map((exp, idx) => (
            <div key={exp.id} style={{background:'var(--card)', padding:'1rem', borderRadius:'8px', marginBottom:'1rem', border:'1px solid rgba(15,23,42,0.1)'}}>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.5rem', marginBottom:'0.5rem'}}>
                <input 
                  value={exp.title} 
                  onChange={e => updateExp(idx, 'title', e.target.value)}
                  placeholder="Job Title"
                  style={{padding:'0.5rem', borderRadius:'6px', border:'1px solid var(--muted)', background:'var(--surface)', color:'var(--text)'}}
                />
                <input 
                  value={exp.company} 
                  onChange={e => updateExp(idx, 'company', e.target.value)}
                  placeholder="Company Name"
                  style={{padding:'0.5rem', borderRadius:'6px', border:'1px solid var(--muted)', background:'var(--surface)', color:'var(--text)'}}
                />
              </div>
              <input 
                value={exp.period} 
                onChange={e => updateExp(idx, 'period', e.target.value)}
                placeholder="Period (e.g., 2023 – 2024)"
                style={{width:'100%', padding:'0.5rem', marginBottom:'0.5rem', borderRadius:'6px', border:'1px solid var(--muted)', background:'var(--surface)', color:'var(--text)'}}
              />
              <textarea 
                value={exp.description} 
                onChange={e => updateExp(idx, 'description', e.target.value)}
                placeholder="Job description"
                rows={3}
                style={{width:'100%', padding:'0.5rem', marginBottom:'0.5rem', borderRadius:'6px', border:'1px solid var(--muted)', background:'var(--surface)', color:'var(--text)'}}
              />
              <button onClick={() => removeExp(idx)} className="btn outline" style={{fontSize:'0.9rem', padding:'0.5rem 0.8rem'}}>Remove</button>
            </div>
          ))}
          <button onClick={addExperience} className="btn outline" style={{fontSize:'0.9rem', padding:'0.5rem 1rem', marginTop:'0.5rem'}}>+ Add Experience</button>
          <button onClick={save} className="btn" style={{fontSize:'0.9rem', padding:'0.5rem 1rem', marginTop:'1rem'}}>Save Experience</button>
        </div>
      ) : (
        <div style={{marginTop:'1rem'}}>
          {experience.map((exp) => (
            <div key={exp.id} className="card">
              <h4>{exp.title} – {exp.company}</h4>
              <span style={{fontSize:'0.9rem', color:'var(--muted)'}}>{exp.period}</span>
              <p style={{marginTop:'0.5rem'}}>{exp.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
