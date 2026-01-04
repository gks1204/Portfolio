"use client"

import { useEffect, useState } from 'react';

export default function AnimatedHero() {
  const phrases = [
    'Design that connects',
    'Interfaces that delight',
    'Branding with purpose',
  ];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index];
    let timeout;

    if (!isDeleting && displayText === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentPhrase.substring(0, displayText.length - 1)
            : currentPhrase.substring(0, displayText.length + 1)
        );
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, phrases]);

  function scrollToProjects() {
    const el = document.getElementById('projects-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section 
      className="hero-section"
      style={{
        backgroundImage: 'url(/images/photo2.jpg)',
        backgroundSize: '120% 170%',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative',
        padding: '8rem 8rem',
        borderRadius: '16px',
        overflow: 'hidden',
        minHeight: '650px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(11,18,32,0.75) 0%, rgba(7,16,37,0.65) 50%, rgba(15,23,42,0.7) 100%)',
        pointerEvents: 'none',
      }}></div>
      
      <div style={{position:'relative', zIndex:1, textAlign:'center', maxWidth:'700px'}}>
        <h2 style={{fontSize:'3.2rem', marginBottom:'1rem', minHeight:'3.8rem', fontWeight:'800'}}>
          <span style={{
            background: 'linear-gradient(135deg, #e6eef8 0%, #a3b5d1 50%, #7a8fb5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block',
          }}>
            {displayText}
          </span>
          <span style={{
            animation: 'blink 0.7s infinite',
            marginLeft: '0.3rem',
            color: '#e6eef8',
            fontWeight: 'bold',
          }}>
            |
          </span>
        </h2>
        <p style={{fontSize:'1.2rem', color:'#e6eef8', marginTop:'2rem', lineHeight:'1.8', letterSpacing:'0.5px'}}>
          I craft clean, user-centered designs with measurable impact.
        </p>
        <div className="actions" style={{justifyContent:'center', marginTop:'3rem', gap:'1rem'}}>
          <a href="mailto:nishi.oberoi24@gmail.com" className="btn" style={{
            background: 'linear-gradient(135deg, #e6eef8 0%, #cdd8eb 100%)',
            color: '#071025',
            fontWeight: '600',
            fontSize: '1rem',
            boxShadow: '0 10px 30px rgba(230,238,248,0.2)',
            transform: 'translateY(0)',
            transition: 'all 300ms ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(230,238,248,0.3)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(230,238,248,0.2)';
          }}>
            📧 Contact Me
          </a>
          <button 
            className="btn outline" 
            onClick={scrollToProjects}
            style={{
              color: '#e6eef8',
              borderColor: '#e6eef8',
              fontSize: '1rem',
              fontWeight: '600',
              transform: 'translateY(0)',
              transition: 'all 300ms ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.background = 'rgba(230,238,248,0.1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            👉 View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
