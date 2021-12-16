import React from "react"

import Data from "./Data"

export default function Body() {
    return (
        <>
        <div>
            <h3>José Luiz Brits, o homem!</h3>
            <p>Começando no React</p>
            <Data
                skill='manejo com flauta gaúcha'
                pretension='dominar o mundo!'
            />
        </div>
        </>
    )
}