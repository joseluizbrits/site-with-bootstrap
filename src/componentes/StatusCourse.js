import React from 'react'
import './StatusCourse.css'

export default function StatusCourse() {
    return (
        <>
            <p className='p--status'>A FAZER (0)</p>
            <p className='p--status'>FAZENDO (0)</p>
            <p className='p--status'>QUASE FEITO (0)</p>
            <p className='p--status'>FEITO (0)</p>
        </>
    )
}