import './ToDoItemComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';
import React, {useState} from 'react';

function ToDoItemComponent (props) {
    const [lift, setLift] = useState(false)
    if(props.complite) {
        return (
            <div className='todo__item done' >
                <h5 className='todo__text'>{props.element}</h5>
            </div>
        )
    }
    return (
        <div className={lift ? 'todo__item close' : 'todo__item'} >
            <h5 className='todo__text'>{props.element}</h5>
            <ButtonSvgComponent 
                callback={() => {props.updateStateData(props.index, props.element)}}
                name='complete' 
                class='todo__button'   
            />
        </div>
        
    )
}

export default ToDoItemComponent