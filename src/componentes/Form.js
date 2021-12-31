import React, { useState } from 'react'

export default function App() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })
  
  const handleFormChange = ({ target }) => {
    if (target.getAttribute('name') === 'fname') {
      setForm({
        name: target.value,
        email: form.email,
        password: form.password
      })
    } else if (target.getAttribute('name') === 'femail') {
      setForm({
        name: form.name,
        email: target.value,
        password: form.password
      })
    } else if (target.getAttribute('name') === 'fpassword') {
      setForm({
        name: form.name,
        email: form.email,
        password: target.value
      })
    }
  }

  const getData = () => {
    console.log(form)
  }

  return (
    <div>
      <label>Nome</label>
      <input type='text' name='fname' value={form.name} onChange={(e) => handleFormChange(e)}></input><br/>

      <label>E-mail</label>
      <input type='email' name='femail' value={form.email} onChange={(e) => handleFormChange(e)}></input><br/>

      <label>Senha</label>
      <input type='password' name='fpassword' value={form.password} onChange={(e) => handleFormChange(e)}></input><br/><br/>

      <button onClick={() => getData()}>Enviar</button>
    </div>
  )
}