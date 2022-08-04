import './FormItemComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';
import React, { useState } from 'react';
import { checkValidity } from '../../helperFunctions/helperFunctions'


function FormItemComponent (props) {
    const [value, setValue] = useState('');
    const [valid, setValid] = useState(false);
    const prompt = valid ? <p className='valid'>{valid}</p> : null
    return (
        <form 
            className='todo__form todo__item__form' 
            onSubmit={(event) => {
                event.preventDefault();
                const newValue = checkValidity(props, value, () => setValue(''), (text)=> setValid(text));
                if (newValue) {
                    props.updateStateData(props.index, newValue, props.rank)
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
                <ButtonSvgComponent class='todo__button close' name='add' type='button' callback={() => props.closeInput()}/>
            </div>
            {prompt}
        </form>
    )

}
export default FormItemComponent