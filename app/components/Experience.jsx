"use client"

export default function Experience() {
  const experiences = [
    {
      title: 'UX/UI Designer',
      company: 'Apptix.io',
      period: '2023 - Present',
      description: 'Designing user-centered digital products and interfaces that solve real-world problems.'
    },
    {
      title: 'Graphic Designer',
      company: 'Angrybaaz Services',
      period: '2022 - 2023',
      description: 'Creating compelling visual content and brand identities for diverse client portfolios.'
    }
  ];

  return (
    <section>
      <h3>Experience</h3>
      <div style={{ marginTop: '1rem' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="card">
            <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--muted)' }}>{exp.title}</h4>
            <p style={{ margin: '0 0 0.25rem 0', fontWeight: '600' }}>{exp.company}</p>
            <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.9rem', color: 'var(--muted)' }}>{exp.period}</p>
            <p style={{ margin: 0 }}>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
