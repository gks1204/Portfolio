"use client"

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({name:'', email:'', phone:'', message:''});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try{
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Message sent — thank you!');
        setForm({name:'', email:'', phone:'', message:''});
      } else {
        setStatus('Failed to send message. Try again later.');
      }
    }catch(err){
      setStatus('Network error.');
    } finally { setLoading(false); }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
      </label>
      <label>
        Email
        <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
      </label>
      <label>
        Phone
        <input type="tel" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
      </label>
      <label>
        Message
        <textarea rows={5} value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
      </label>
      <button className="btn" type="submit" disabled={loading}>{loading? 'Sending...':'Send Message'}</button>
      {status && <p style={{marginTop:8}}>{status}</p>}
    </form>
  );
}
