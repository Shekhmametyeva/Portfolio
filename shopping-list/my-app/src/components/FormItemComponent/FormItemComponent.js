import './FormItemComponent.css';
import React from 'react';
import ButtonSvgComponents from '../buttonSvgComponent/ButtonSvgComponent';
import { editData } from '../../api/api';


class FormItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            load: false,
        }
    }
    
    handleSubmit(event){
        event.preventDefault();
        if(!this.state.load) {
            this.setState({...this.state, load: true});
            editData(this.props.element.id, this.state.value, this.props.data, this.props.changeHighlighted).then(() => {
                this.props.fetchData()
            }).then(() => {
                this.props.onEditChange();
                this.setState({...this.state, value: '', load: false});
            })    
        }   
    }
    render() {
        const button = this.state.load ? 
        <div className='loading'></div> : 
        <ButtonSvgComponents type='submit' name='add' class='shopping__icon' /> ;
        return(
            <form className="shopping__form shopping__item__form" onSubmit={(event) => this.handleSubmit(event)}>
                <input 
                autoFocus 
                readOnly={this.state.load}
                type='text' 
                value={this.state.value} 
                className='shopping__input' 
                onChange={(event) => {this.setState({...this.state, value: event.target.value})}}/>
                {button}
                <ButtonSvgComponents name='add' class='close shopping__icon' callback={this.props.onEditChange}/>
            </form>
        )
    }
}
export default FormItemComponent
