import './InputComponent.css';
import React from 'react';
import ButtonSvgComponents from '../buttonSvgComponents/ButtonSvgComponents';

class InputComponent extends React.Component {
    
    render() {
        return (
            <div className="shopping__form">
                <input type='text' placeholder='Что добавим в список' className='shopping__input' onChange={(event) => this.props.changeStateValue(event.target.value)}/>
                <ButtonSvgComponents name={'add'} funcCheckElement={this.props.funcCheckElement} value = {this.props.value}/>
            </div>
            
        )
    }
}

export default InputComponent;