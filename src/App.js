import React, { useState } from 'react'

const tabelaIMC = () => {
  return (
    <table border='1' style={{borderCollapse: 'collapse'}}>
      <thead>
        <tr>
          <th>Classificação</th>
          <th>IMC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abaixo do peso</td>
          <td>Abaixo de 18,5</td>
        </tr>
        <tr>
          <td>Peso normal</td>
          <td>Entre 18,5 e 24,9</td>
        </tr>
        <tr>
          <td>Sobrepeso</td>
          <td>Entre 25 e 29,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau I</td>
          <td>Entre 30 e 34,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau II</td>
          <td>Entre 35 e 39,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau III</td>
          <td>Maior que 40</td>
        </tr>
      </tbody>
    </table>
  )
}

const componentePeso = (p, setP) => {
  return (
    <div>
      <label>
        Peso
        <input value={p} onChange={(e) => setP(e.target.value)}></input>
      </label>
    </div>
  )
}

const componenteAltura = (a, setA) => {
  return (
    <div>
      <label>
        Altura
        <input value={a} onChange={(e) => setA(e.target.value)}></input>
      </label>
    </div>
  )
}

const componenteCalcular = (p, a, set) => {
  const calcular = () =>{
    set(p / (a * a))
  }
  return (
    <div>
      <button onClick={calcular}>Calcular</button>
    </div>
  )
}

const componenteResultado = (res) => {
  return (
    <div>
      <p>Resultado: {res.toFixed(2)}</p>
    </div>
  )
}

export default function App() {

  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)

  return (
    <>
      {componentePeso(peso, setPeso)}
      {componenteAltura(altura, setAltura)}
      {componenteCalcular(peso, altura, setResultado)}
      {componenteResultado(resultado)}
      {tabelaIMC()}
    </>
  )
}