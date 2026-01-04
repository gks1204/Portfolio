"use client"

export default function ContactInfo() {
  return (
    <section>
      <h3>Get in Touch</h3>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'1.5rem', marginTop:'1rem'}}>
        <div className="card">
          <h4>📧 Email</h4>
          <a href="mailto:nishi.oberoi24@gmail.com" style={{color:'var(--btn-bg)', textDecoration:'none', wordBreak:'break-all'}}>
            nishi.oberoi24@gmail.com
          </a>
        </div>
        <div className="card">
          <h4>📱 Phone</h4>
          <a href="tel:+919876543210" style={{color:'var(--btn-bg)', textDecoration:'none'}}>
            +91 98765 43210
          </a>
        </div>
        <div className="card">
          <h4>📍 Address</h4>
          <p style={{margin:0}}>New Delhi, India</p>
        </div>
      </div>
    </section>
  );
}
