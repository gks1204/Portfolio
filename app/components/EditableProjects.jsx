"use client"

import { useState } from 'react';
import Image from 'next/image';

export default function EditableProjects({ initialProjects = [] }) {
  const defaultProjects = [
    {
      id: 1,
      title: 'Freelance Design Project',
      description: 'Led comprehensive UX/UI redesign for a SaaS platform, improving user engagement by 35%.',
      category: 'UI/UX',
    },
    {
      id: 2,
      title: 'Marketing Campaign Design',
      description: 'Created cohesive visual identity and marketing collateral for a tech startup launch.',
      category: 'Branding',
    },
  ];

  const [projects, setProjects] = useState(initialProjects.length > 0 ? initialProjects : defaultProjects);
  const [editing, setEditing] = useState(false);
  const [temp, setTemp] = useState([...projects]);

  function addProject() {
    setTemp([...temp, { id: Date.now(), title: '', description: '', category: '' }]);
  }

  function updateProject(idx, field, val) {
    const newTemp = [...temp];
    newTemp[idx][field] = val;
    setTemp(newTemp);
  }

  function removeProject(idx) {
    setTemp(temp.filter((_, i) => i !== idx));
  }

  function save() {
    setProjects(temp.filter(p => p.title && p.description));
    setEditing(false);
  }

  function cancel() {
    setTemp([...projects]);
    setEditing(false);
  }

  return (
    <section id="projects-section">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h3>Projects</h3>
        <button className="btn" onClick={() => editing ? cancel() : setEditing(true)} style={{fontSize:'0.9rem', padding:'0.5rem 1rem'}}>
          {editing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      {editing ? (
        <div style={{marginTop:'1rem'}}>
          {temp.map((proj, idx) => (
            <div key={proj.id} style={{background:'var(--card)', padding:'1rem', borderRadius:'8px', marginBottom:'1rem', border:'1px solid rgba(15,23,42,0.1)'}}>
              <input 
                value={proj.title} 
                onChange={e => updateProject(idx, 'title', e.target.value)}
                placeholder="Project title"
                style={{width:'100%', padding:'0.5rem', marginBottom:'0.5rem', borderRadius:'6px', border:'1px solid var(--muted)', background:'var(--surface)', color:'var(--text)'}}
              />
              <textarea 
                value={proj.description} 
                onChange={e => updateProject(idx, 'description', e.target.value)}
                placeholder="Project description"
                rows={3}
                style={{width:'100%', padding:'0.5rem', marginBottom:'0.5rem', borderRadius:'6px', border:'1px solid var(--muted)', background:'var(--surface)', color:'var(--text)'}}
              />
              <input 
                value={proj.category} 
                onChange={e => updateProject(idx, 'category', e.target.value)}
                placeholder="Category (e.g., UI/UX, Branding)"
                style={{width:'100%', padding:'0.5rem', marginBottom:'0.5rem', borderRadius:'6px', border:'1px solid var(--muted)', background:'var(--surface)', color:'var(--text)'}}
              />
              <button onClick={() => removeProject(idx)} className="btn outline" style={{fontSize:'0.9rem', padding:'0.5rem 0.8rem'}}>Remove Project</button>
            </div>
          ))}
          <button onClick={addProject} className="btn outline" style={{fontSize:'0.9rem', padding:'0.5rem 1rem', marginTop:'0.5rem'}}>+ Add Project</button>
          <button onClick={save} className="btn" style={{fontSize:'0.9rem', padding:'0.5rem 1rem', marginTop:'1rem'}}>Save Projects</button>
        </div>
      ) : (
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(350px, 1fr))', gap:'1.5rem', marginTop:'1rem'}}>
          {projects.map((proj) => (
            <div key={proj.id} className="card">
              <h4>{proj.title}</h4>
              <p style={{color:'var(--muted)', fontSize:'0.9rem'}}>{proj.category}</p>
              <p>{proj.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
