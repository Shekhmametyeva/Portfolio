import './FormItemComponent.css';
import React from 'react';
import ButtonSvgComponents from '../buttonSvgComponent/ButtonSvgComponent';

class FormItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.editData = this.editData.bind(this)
    }
    editData() {
        
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.callback.editData(this.props.element.id, this.props.value);
        this.props.callback.openForm()
    }
    render() {
        return(
            <form className="shopping__form shopping__item__form" onSubmit={(event) => this.handleSubmit(event)}>
                <input 
                autoFocus 
                type='text' 
                value={this.props.value} 
                placeholder={this.props.element.title} 
                className='shopping__input' 
                onChange={(event) => {this.props.callback.changeStateitemValue(event.target.value)}}/>
                <ButtonSvgComponents type='submit' name='add' class='shopping__icon' />
                <ButtonSvgComponents name='add' class='close shopping__icon' callback={this.props.callback.openInput}/>
            </form>
        )
    }
}
export default FormItemComponent
