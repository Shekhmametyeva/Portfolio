import './FormComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';
import React, { useState } from 'react';
import { checkValidity, handleInvalidValue } from '../../helperFunctions/helperFunctions'
import RankFormComponent from '../RankFormComponent/RankFormComponent';

function processValidation (resultValidation, props, activeRank, value, setValue, setValid) {
    const resultValueProcessing = handleInvalidValue (resultValidation, setValue, setValid, props.highlight, value);
    if (resultValueProcessing) {
        if(activeRank !== props.rank || props.rank !== 'Все') {
            props.changeRank()
        }
    props.editStateData(resultValidation, activeRank)
    }
    setValue()
}

function FormComponent (props) {
    const [value, setValue] = useState('');
    const [valid, setValid] = useState(false);
    const [activeRank, setActiveRank] = useState('Личные');
    
    const prompt = valid ? <p className='valid'>{valid}</p> : null;
    return (
        <form   
            className='todo__form' 
            onSubmit={(event) => {
                event.preventDefault();
                const resultValidation = checkValidity(props.dataFull, value);
                processValidation (resultValidation, props, activeRank, value.trim(), () => setValue(''), (text)=> setValid(text));
            }}> 
            <div className='input__container'>
                <input
                    autoFocus
                    readOnly={valid}
                    type='text' 
                    placeholder={valid ? '' : 'Что добавим в список?'} 
                    value={value} 
                    className='todo__input' 
                    onChange={(event) => {
                        setValue(event.target.value)
                    }}
                />
                <ButtonSvgComponent name='add' type='submit' disabled={valid}/>
            </div>
            {prompt}
            <RankFormComponent ranksList={props.ranksList} activeRank={activeRank} changeActiveRanc={(value) => setActiveRank(value)}/>
        </form>
    )
}

export default FormComponent