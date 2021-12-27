import React, { useState } from 'react'
import './App.css'

import BoxCurse from './componentes/BoxCourse'
import StatusCourse from './componentes/StatusCourse'
import BoxInsert from './componentes/BoxInsert'

export default function App() {

  let [box, setBox] = useState('')

  return (
    <>
      <header>
        <h1>Atividades 2022.1</h1>
        <div className='status--course'>
          <StatusCourse />
        </div>
        <button className='insert--button' onClick={() => setBox(box = <BoxCurse />)}>Inserir disciplina</button>
      </header>
      <div className='window--course'>
        {box}
      </div>
      {/* <BoxInsert /> */}
    </>
  )
}