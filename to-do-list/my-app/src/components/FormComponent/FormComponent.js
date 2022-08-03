import './FormComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';
import React, { useState } from 'react';

function checkValidity (props, value, setValue, setValid) {
    if(!value.trim()) {
        setValid('поле не заполнено')
        setTimeout(() => {
            setValid(false)
        }, 1500);
        return null
    }
    if(props.data.find(el => el.value === value.trim())) {
        props.highlight(value)
        setTimeout(() => {
            setValue()
        }, 1500);
        return null
    }
    setValue()
    return value.trim()
}


function FormComponent (props) {
    const [value, setValue] = useState('');
    const [valid, setValid] = useState(false);
    const prompt = valid ? <p className='valid'>{valid}</p> : null;
    return (
        <form className='todo__form' 
            onSubmit={(event) => {
                event.preventDefault();
                const newValue = checkValidity(props, value, () => setValue(''), (text)=> setValid(text));
                if (newValue) {
                    props.updateStateData(newValue)
                }
                
            }}> 
            <div className='input__container'>
                <input
                    readOnly={valid}
                    type='text' 
                    placeholder={valid ? '' : 'Что добавим в список задач?'} 
                    value={value} 
                    className='todo__input' 
                    onChange={(event) => {
                        setValue(event.target.value)
                    }}
                />
                <ButtonSvgComponent name='add' type='submit' disabled={valid}/>
            </div>
            {prompt}
        </form>
    )
}

export default FormComponent