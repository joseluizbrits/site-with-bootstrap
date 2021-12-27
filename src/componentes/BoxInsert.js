import react from 'react'
import './BoxInsert.css'

export default function BoxInsert() {
    return (
        <div className="box--insert">
            <label>Disciplina</label>
            <input type='text' placeholder='Inserir disciplina...'></input>
            <label>Tarefas</label>
            <input type='checkbox' checked='checked' id='check_fta' value=''></input>
            <label for='check_fta'>FTA</label>
            <input type='checkbox' id='check_fta' value=''></input>
            <label for='check_fta'>AIA (A1)</label>
            <input type='checkbox' id='check_fta' value=''></input>
            <label for='check_fta'>AIA (A2)</label>
        </div>
    )
}