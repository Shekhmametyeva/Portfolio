import './FormComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';
import React, { useState } from 'react';

function checkValidity (props, value) {
    if(!value.trim()) {
        console.log('пустой')
        return null
    }
    if(props.data.find(el => el === value)) {
        console.log('уже есть')
        return null
    }
    return value
}


function FormComponent (props) {
    const [value, setValue] = useState('');
    return (
        <form className='todo__form' 
            onSubmit={(event) => {
                event.preventDefault();
                if(checkValidity (props, value)) {
                    props.updateStateValue(value)
                }
                setValue('')
            }}> 
            <input 
                type='text' 
                placeholder='Что добавим в список задач?' 
                value={value} 
                className='todo__input' 
                onChange={(event) => setValue(event.target.value)}
            />
            <ButtonSvgComponent name='add' type='submit'/>
        </form>
    )
}

export default FormComponent