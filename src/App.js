import React, { useState } from 'react'
import './App.css'

import BoxCurse from './componentes/BoxCourse'
import StatusCourse from './componentes/StatusCourse'
import BoxInsert from './componentes/BoxInsert'

export default function App() {

  const [boxInsert, setBoxInsert] = useState([])

  const [courses, setCourses] = useState(
    [
      {
        courseName: '',
        fta: false,
        a1: false,
        a2: false
      }
    ]
  )

  console.log(courses[0].courseName)

  return (
    <>
      <header>
        <h1>Atividades 2022.1</h1>
        <div className='status--course'>
          <StatusCourse />
        </div>
        <button className='insert--button' onClick={() => setBoxInsert([<BoxInsert courses={courses}/>])}>Inserir disciplina</button>
      </header>
      <div className='window--course'>
        {boxInsert[0]}
      </div>
    </>
  )
}