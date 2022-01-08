import React, { useState, useEffect } from 'react'

export default function ListaCarros() {

    const [carros, setCarros] = useState([])

    useEffect(
        () => {
            fetch('https://apireactexample1.brits23.repl.co')
            .then((res) => res.json())
            .then(
                (resultado) => {
                    setCarros(resultado)
                }
            )
        }
    )

    return (
        <div>
            {carros.map(
                carro => <div key={carro.id}>{carro.id} - {carro.categoria} {carro.modelo} - preço: {carro.preco}</div>
            )}
        </div>
    )
}