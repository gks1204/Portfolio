"use client"

export default function Projects() {
  const projects = [
    {
      title: 'Freelance Design Project',
      description: 'A comprehensive design solution for an e-commerce platform focusing on user experience and conversion optimization.',
      category: 'UI/UX Design'
    },
    {
      title: 'Marketing Campaign Design',
      description: 'Designed cohesive visual assets and branding materials for a digital marketing campaign across multiple channels.',
      category: 'Brand Design'
    }
  ];

  return (
    <section id="projects-section">
      <h3>Projects</h3>
      <div className="grid" style={{ marginTop: '1rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="card" style={{ cursor: 'pointer' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--muted)' }}>{project.title}</h4>
            <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.9rem' }}>{project.description}</p>
            <span style={{
              display: 'inline-block',
              padding: '0.25rem 0.75rem',
              backgroundColor: 'var(--btn-bg)',
              color: 'var(--btn-text)',
              borderRadius: '6px',
              fontSize: '0.85rem'
            }}>
              {project.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
