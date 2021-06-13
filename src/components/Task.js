import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete}) => {
    return (
        <div className='task'>
            <h2>{task.text}</h2>
            <p>{task.day}</p>
            <FaTimes
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() =>onDelete(task.id)}
            />

        </div>
    )
}

export default Task
