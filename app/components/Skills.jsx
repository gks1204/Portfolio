"use client"

export default function Skills() {
  const skills = [
    'UI/UX Design',
    'Brand Identity',
    'Prototyping',
    'User Research',
    'Wireframing',
    'Visual Design',
    'Interaction Design',
    'Design Systems'
  ];

  return (
    <section>
      <h3>Skills</h3>
      <div className="grid" style={{ marginTop: '1rem' }}>
        {skills.map((skill, index) => (
          <div key={index} className="card">
            <p style={{ margin: 0, fontWeight: '600' }}>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
