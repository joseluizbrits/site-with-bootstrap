import React from 'react'

export default class Classe extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <h2>Primeiro Componente Classe</h2>
                <p>Nome: {this.props.nome}</p>
                <p>Empresa: {this.props.empresa}</p>
            </>
        )
    }
}