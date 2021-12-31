import React, { useState } from 'react'
import './App.css'

import BoxCurse from './componentes/BoxCourse'
import StatusCourse from './componentes/StatusCourse'
import BoxInsert from './componentes/BoxInsert'

export default function App() {

  const [boxInsert, setBoxInsert] = useState([])

  const [form, setForm] = useState({
    courseName: '',
    fta: false,
    a1: false,
    a2: false
  })

  const handleFormChange = ({ target }) => {
    if (target.getAttribute('name') === 'courseName') {
      setForm({
        courseName: target.value,
        fta: form.fta,
        a1: form.a1,
        a2: form.a2
      })
    } else if (target.getAttribute('name') === 'check_fta') {
      setForm({
        courseName: form.courseName,
        fta: target.checked,
        a1: form.a1,
        a2: form.a2
      })
    } else if (target.getAttribute('name') === 'check_a1') {
      setForm({
        courseName: form.courseName,
        fta: form.fta,
        a1: target.checked,
        a2: form.a2
      })
    } else if (target.getAttribute('name') === 'check_a2') {
      setForm({
        courseName: form.courseName,
        fta: form.fta,
        a1: form.a1,
        a2: target.checked
      })
    }
  }

  const getData = () => console.log(form)

  return (
    <>
      <header>
        <h1>Atividades 2022.1</h1>
        <div className='status--course'>
          <StatusCourse />
        </div>
        <button className='insert--button' onClick={() => setBoxInsert([<BoxInsert form={form} handleFormChange={handleFormChange} getData={getData} />])}>Inserir disciplina</button>
      </header>
      <div className='window--course'>
        {boxInsert[0]}
      </div>
    </>
  )
}