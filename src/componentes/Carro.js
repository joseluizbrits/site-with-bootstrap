import React from 'react'

export default class Carro extends React.Component {
    constructor(props) {
        super(props)
        this.modelo = 'Cayenne'
        this.state = {
            ligado: false,
            velAtual: 0
        }
    }
    ligarDesligar() {
        this.setState(
            (state) => (
                {ligado: !state.ligado}
            )
        )
    }
    acelerar() {
        this.setState(
            (state, props) => (
                {velAtual: state.velAtual + props.fator}
            )
        )
    }
    
    render() {
        return (
            <>
                <h2>Meu Carro</h2>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
                <p>Vel. Atual: {this.state.velAtual}</p>
                <button onClick={() => this.ligarDesligar()}>
                    {this.state.ligado ? 'Desligar' : 'Ligar'}
                </button>
                <button onClick={() => this.acelerar()}>
                    Acelerar
                </button>
            </>
        )
    }
}