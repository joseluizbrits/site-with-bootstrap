import react from 'react'
import './BoxInsert.css'

export default function BoxInsert({ courses }) {

    return (
        <div className="box--insert">
            <label>Disciplina</label>
            <input type='text' placeholder='Inserir disciplina...' value={courses[0].courseName}></input>
            <label>Tarefas</label>
            <input type='checkbox' checked='checked' id='check_fta' value={courses[0].fta}></input>
            <label htmlFor='check_fta'>FTA</label>
            <input type='checkbox' id='check_a1' value={courses[0].a1}></input>
            <label htmlFor='check_a1'>AIA (A1)</label>
            <input type='checkbox' id='check_a2' value={courses[0].a2}></input>
            <label htmlFor='check_a2'>AIA (A2)</label>
            <button onClick=''>Inserir</button>
        </div>
    )
}