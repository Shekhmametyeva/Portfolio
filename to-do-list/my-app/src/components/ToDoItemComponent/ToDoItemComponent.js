import './ToDoItemComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';
import FormItemComponent from '../FormItemComponent/FormItemComponent';
import React, { useState } from 'react';



function ToDoItemComponent (props) {
    const [inputOpen, setInputOpen] = useState(false);

    const input = inputOpen ? <FormItemComponent element={props.element} index={props.index} updateStateData={props.updateStateData} highlight={props.highlight} closeInput={() => setInputOpen(false)} dataFull={props.dataFull} /> : null
    
    const openMenu = props.menu 
        ? <div className='todo__menu' >
            <div className='todo__menu__item' onClick={() => props.deleteItem(props.index)}>
                <p>Удалить</p>
                <ButtonSvgComponent name='delete' class='todo__button'/>
            </div>
            <div className='todo__menu__item' onClick={() => setInputOpen(true)}>
                <p>Редактировать</p>
                <ButtonSvgComponent name='edit' class='todo__button'/>
            </div>
        </div> 
        : null;

    return (
        <div  
            className={props.complite ?  (props.highlighted ? 'todo__item done highlighted' : 'todo__item done') : (props.highlighted ? 'todo__item highlighted' : 'todo__item')} 
            onAnimationEnd={() => {props.highlight('')}} >
                <h5 className='todo__text'>{props.element}</h5>
                <ButtonSvgComponent 
                    callback={() => {
                        props.updateSetData(props.index, props.element)
                    }}
                    name='complete' 
                    class='todo__button'   
                />
                <ButtonSvgComponent 
                    callback={
                        props.updateSetMenu
                    }
                    value={props.menu ? '' : props.element}
                    name='menu' 
                    class='todo__button todo__menu__button'   
                />
                {openMenu}
                {input}
                
        </div>
        
    )
}

export default ToDoItemComponent