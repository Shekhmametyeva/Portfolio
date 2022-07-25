import './InputComponent.css';
import React from 'react';
import ButtonSvgComponents from '../buttonSvgComponent/ButtonSvgComponent';

class InputComponent extends React.Component {
    
    render() {
        return (
            <div className="shopping__form">
                <input type='text' placeholder='Что добавим в список' value={this.props.value} className='shopping__input' onChange={(event) => {this.props.changeStateValue(event.target.value)}}/>
                <ButtonSvgComponents name={'add'} callback={this.props.callback} value = {this.props.value} />
            </div>
            
        )
    }
}

export default InputComponent;