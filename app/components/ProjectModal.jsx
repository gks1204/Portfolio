"use client"

import Image from 'next/image';

export default function ProjectModal({ open, onClose, project }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <h3>{project?.title ?? 'Project'}</h3>
          <button onClick={onClose} className="close-btn">✕</button>
        </div>
        <div style={{display:'flex', gap:'1rem', marginTop:'1rem', flexWrap:'wrap'}}>
          <div style={{flex:'1 1 320px'}}>
            <p>{project?.description ?? 'Project details go here.'}</p>
          </div>
          <div style={{flex:'1 1 280px'}}>
            <Image src={project?.image || '/images/photo2.jpg'} alt="project" width={420} height={560} style={{borderRadius:12}} />
          </div>
        </div>
      </div>
    </div>
  );
}
