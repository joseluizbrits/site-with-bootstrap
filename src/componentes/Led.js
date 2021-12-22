import React from 'react'

import './Led.css'

export default function Led (props) {
  return (
    <>
      <div className={props.ligado ? 'ligado' : 'desligado'}></div>     
      <button onClick={() => props.setLigado(!props.ligado)}>{props.ligado ? 'Desligar' : 'Ligar'}</button>
    </>
  )
}