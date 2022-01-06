import React, { useState } from 'react'

export default function App() {
  
  const [valorTela, setValorTela] = useState('')
  const [resultado, setResultado] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operado, setOperado] = useState(false)

  // COMPONENTES
  const Tela = (valor, res) => {
    return (
      <div style={cssTela}>
        <span style={cssTelaOperacao}>{valor}</span>
        <span style={cssTelaResultado}>{res}</span>
      </div>
    )
  }

  const Butaum = (label, onClick) => {
    return (
      <button style={cssButaum} onClick={onClick}>{label}</button>
    )
  }

  // FUNÇÕES
  const addDigitoTela = (d) => {
    if ((d === '+' || d === '-' || d === '*' || d === '/') && operado) {
      setOperado(false)
      setValorTela(resultado + d)
      return
    }
    if (operado) {
      setValorTela(d)
      setOperado(false)
      return
    }
    const ValorDigitadoTela = valorTela + d
    setValorTela(ValorDigitadoTela)
  }

  const limparMemoria = () => {
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }

  const Operacao = (oper) => {
    if (oper === 'bs') {
      let vtela = valorTela
      vtela = vtela.substring(0, (vtela.length - 1))
      setValorTela(vtela)
      setOperado(false)
      return
    }
    try {
      const resCalculo = eval(valorTela)
      setAcumulador(resCalculo)
      setResultado(resCalculo)
      setOperado(true)
    }
    catch {
      setResultado('ERRO')
    }
  }

  // ESTILOS
  const cssConteiner = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    width: 300,
    border: '1px solid #000'
  }

  const cssButauns = {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }

  const cssTela = {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#444',
    flexDirection: 'column',
    width: 260
  }

  const cssTelaOperacao = {
    fontSize: 25,
    color: '#fff',
    height: 20
  }

  const cssTelaResultado = {
    fontSize: 50,
    color: '#fff',
  }

  const cssButaum = {
    fontSize: 30,
    height: 75,
    width: 75,
    padding: 20,
    backgroundColor: '#000',
    color: '#fff',
    borderColor: '#000',
    textAlign: 'center',
    outline: 'none'
  }

  return (
    <>
      <div style={cssConteiner}>
        <h3>Calculadora Matemática Simples</h3>
        {Tela(valorTela, resultado)}
        <div style={cssButauns}>
          {Butaum('AC', limparMemoria)}
          {Butaum('(', () => addDigitoTela('('))}
          {Butaum(')', () => addDigitoTela(')'))}
          {Butaum('/', () => addDigitoTela('/'))}
          {Butaum('7', () => addDigitoTela('7'))}
          {Butaum('8', () => addDigitoTela('8'))}
          {Butaum('9', () => addDigitoTela('9'))}
          {Butaum('*', () => addDigitoTela('*'))}
          {Butaum('4', () => addDigitoTela('4'))}
          {Butaum('5', () => addDigitoTela('5'))}
          {Butaum('6', () => addDigitoTela('6'))}
          {Butaum('-', () => addDigitoTela('-'))}
          {Butaum('1', () => addDigitoTela('1'))}
          {Butaum('2', () => addDigitoTela('2'))}
          {Butaum('3', () => addDigitoTela('3'))}
          {Butaum('+', () => addDigitoTela('+'))}
          {Butaum('0', () => addDigitoTela('0'))}
          {Butaum('.', () => addDigitoTela('.'))}
          {Butaum('<-', () => Operacao('bs'))}
          {Butaum('=', () => Operacao('='))}
        </div>
      </div>
    </>
  )
}