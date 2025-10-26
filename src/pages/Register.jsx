import React, { useState } from 'react'

export default function Register(){
  const [form, setForm] = useState({name:'', email:'', password:''})
  function handle(e){ setForm({...form, [e.target.name]: e.target.value}) }
  function submit(e){ e.preventDefault(); }
  return (
    <div className="container py-5">
      <h2>Register</h2>
      <form onSubmit={submit} style={{maxWidth:480}}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input name="name" className="form-control" value={form.name} onChange={handle} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input name="email" type="email" className="form-control" value={form.email} onChange={handle} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input name="password" type="password" className="form-control" value={form.password} onChange={handle} />
        </div>
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  )
}
