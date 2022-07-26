import './InputComponent.css';
import React from 'react';
import ButtonSvgComponents from '../buttonSvgComponent/ButtonSvgComponent';
// import { deleteAward } from '../../api/api';

class FormComponent extends React.Component {
    handleSubmit(event){
        event.preventDefault();
        this.props.callback(this.props.value)
    }
    render() {
        return (
            <form className="shopping__form" onSubmit={(event) => this.handleSubmit(event)}>
                <input type='text' placeholder='Что добавим в список' value={this.props.value} className='shopping__input' onChange={(event) => {this.props.changeStateValue(event.target.value)}}/>
                <ButtonSvgComponents type='submit' name={'add'} />
            </form>
            
        )
    }
}

export default FormComponent;