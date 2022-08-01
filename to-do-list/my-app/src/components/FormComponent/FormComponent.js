import './FormComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';
import React, { useState } from 'react';


function FormComponent () {
    const [value, setValue] = useState('');
    return (
        <form className='todo__form' 
            onSubmit={(event) => {
                event.preventDefault();
                setValue('')
            }}> 
            <input type='text' placeholder='Что добавим в список задач?' value={value} className='todo__input' onChange={(event) => setValue(event.target.value)}/>
            <ButtonSvgComponent name='add' type='submit'/>
        </form>
    )
}

export default FormComponent