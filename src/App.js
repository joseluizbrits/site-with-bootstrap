import React, { useState } from 'react'

export default function App() {

  const [car, setCar] = useState('HRV')

  const handleChangeName = (e) => {
    setCar(e.target.value)
  }

  return (
    <>
      <label>Selecione um carro</label>
      <select value={car} onChange={(e) => handleChangeName(e)}>
        <option value='HRV'>HRV</option>
        <option value='Golf'>Golf</option>
        <option value='Sonata'>Sonata</option>
        <option value='Argo'>Argo</option>
      </select>
      <p>Carro selecionado: {car}</p>
    </>
  )
}