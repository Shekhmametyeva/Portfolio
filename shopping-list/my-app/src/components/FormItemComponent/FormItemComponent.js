import './FormItemComponent.css';
import React from 'react';
import ButtonSvgComponents from '../buttonSvgComponent/ButtonSvgComponent';
import { checkElement } from '../../api/api';


class FormItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.editData = this.editData.bind(this);
        this.state = {
            value: '',
            load: false,
        }
    }
    async editData(id, value, data) {
        if(checkElement(value, data)) {
            this.setState({...this.state, load: true})
            await fetch(`http://localhost:5000/api/award/${id}`, {
                method: 'PUT',
                body: JSON.stringify({title: value}),
            });
            await this.props.callback.fetchData();
            this.setState({...this.state, value: '', load: false})
        }  
    }
    handleSubmit(event){
        event.preventDefault();
        this.editData(this.props.element.id, this.state.value, this.props.data).then(() => {
            this.props.callback.openForm()
        })
        
    }
    render() {
        const button = this.state.load ? <div className='loading'></div> : <ButtonSvgComponents type='submit' name='add' class='shopping__icon' /> ;
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
                <ButtonSvgComponents name='add' class='close shopping__icon' callback={this.props.callback.openInput}/>
            </form>
        )
    }
}
export default FormItemComponent
