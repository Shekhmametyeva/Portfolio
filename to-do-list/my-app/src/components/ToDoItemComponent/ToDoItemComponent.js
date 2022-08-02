import './ToDoItemComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';
import React, { useState } from 'react';

function ToDoItemComponent (props) {
    const [done, setDone] = useState(false);
    if(done) {
        return (
            <div className={done ? 'todo__item done' : 'todo__item'} >
                <h5 className='todo__text'>{props.element}</h5>
            </div>
        )
    }
    return (
        <div className={done ? 'todo__item done' : 'todo__item'} >
            <h5 className='todo__text'>{props.element}</h5>
            <ButtonSvgComponent 
                callback={() => setDone(true)}
                name='done' 
                class='todo__button' 
                
            />
        </div>
        
    )
}

export default ToDoItemComponent