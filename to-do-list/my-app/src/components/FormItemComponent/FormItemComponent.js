import './FormItemComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';
import React, { useState } from 'react';
import { checkValidity, handleInvalidValue } from '../../helperFunctions/helperFunctions'



function processValidation (resultValidation, props, value, setValue, setValid) {
    console.log(props.rank)
    const resultValueProcessing = handleInvalidValue (resultValidation, setValue, setValid, props.highlight, value);
    if (resultValueProcessing) {
        props.updateStateData(props.index, resultValidation, props.rank)
    }
    setValue()
}

function FormItemComponent (props) {
    const [value, setValue] = useState('');
    const [valid, setValid] = useState(false);
    const prompt = valid ? <p className='valid'>{valid}</p> : null
    return (
        <form 
            className='todo__form todo__item__form' 
            onSubmit={(event) => {
                event.preventDefault();
                if (props.element !== value.trim()) {
                    const resultValidation = checkValidity(props.dataFull, value);
                    processValidation (resultValidation, props, value.trim(), () => setValue(''), (text)=> setValid(text));
                    return
                }
                props.closeInput()    
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