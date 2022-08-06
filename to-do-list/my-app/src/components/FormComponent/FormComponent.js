import './FormComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';
import React, { useState } from 'react';
import { checkValidity } from '../../helperFunctions/helperFunctions'
import RankFormComponent from '../RankFormComponent/RankFormComponent';

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
                const newValue = checkValidity(props, value, () => setValue(''), (text)=> setValid(text));
                if (newValue) {
                    props.editStateData(newValue, activeRank)
                } 
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