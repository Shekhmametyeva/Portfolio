import './InputComponent.css';
import React from 'react';
import ButtonSvgComponents from '../buttonSvgComponents/ButtonSvgComponents';

class InputComponent extends React.Component {
    render() {
        return (
            <div className="shopping__form">
                <input type='text' placeholder='Что добавим в список' className='shopping__input' />
                <ButtonSvgComponents name={'add'} />
            </div>
            
        )
    }
}

export default InputComponent;