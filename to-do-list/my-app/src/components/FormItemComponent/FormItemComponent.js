import './FormItemComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';
import React, { useState } from 'react';

function checkValidity (props, value, setValue, setValid) {
    console.log(props.dataFull)
    if(!value.trim()) {
        setValid('поле не заполнено')
        setTimeout(() => {
            setValue()
            setValid(false)
        }, 1500);
        return null
    }
    if(props.element === value.trim()) {
        props.closeInput()
        return null
    }
    if(props.dataFull.find(el => el.value === value.trim())) {
        props.highlight(value.trim())
        setTimeout(() => {
            setValue()
        }, 1500);
        return null
    }
    setValue()
    return value.trim()
}

function FormItemComponent (props) {
    const [value, setValue] = useState('');
    const [valid, setValid] = useState(false);
    const prompt = valid ? <p className='valid'>{valid}</p> : null
    return (
        <form className='todo__form todo__item__form' 
            onSubmit={(event) => {
                event.preventDefault();
                const newValue = checkValidity(props, value, () => setValue(''), (text)=> setValid(text));
                if (newValue) {
                    props.updateStateData(props.index, newValue)
                }
                
            }}> 
            <div className='input__container'>
                <input
                    autoFocus 
                    readOnly={valid}
                    type='text' 
                    value={value} 
                    className='todo__input' 
                    onChange={(event) => {
                        setValue(event.target.value)
                    }}
                />
                <ButtonSvgComponent class='todo__button' name='add' type='submit' disabled={valid}/>
            </div>
            {prompt}
        </form>
    )

}
export default FormItemComponent