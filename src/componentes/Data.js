import React from "react"

export default function Data(props) {
    return (
        <>
            <p>Habilidade: {props.skill}</p>
            <p>Pretensões: {props.pretension}</p>
        </>
    )
}