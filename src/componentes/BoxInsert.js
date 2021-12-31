import React from 'react'
import './BoxInsert.css'

export default function BoxInsert({ form, handleFormChange, getData }) {

    

    return (
        <div className="box--insert">
            <label>Disciplina</label>

            <input type='text' placeholder='Inserir disciplina...' name='courseName' value={form.courseName} onChange={(e) => handleFormChange(e)}></input>

            <label>Tarefas</label>

            <input type='checkbox' name='check_fta' onChange={(e) => handleFormChange(e)}></input>
            <label htmlFor='check_fta'>FTA</label>

            <input type='checkbox' name='check_a1' onChange={(e) => handleFormChange(e)}></input>
            <label htmlFor='check_a1'>AIA (A1)</label>

            <input type='checkbox' name='check_a2' onChange={(e) => handleFormChange(e)}></input>
            <label htmlFor='check_a2'>AIA (A2)</label>

            <button onClick={() => getData()}>Inserir</button>
        </div>
    )
}