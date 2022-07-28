import './FormComponent.css';
import React from 'react';
import ButtonSvgComponents from '../buttonSvgComponent/ButtonSvgComponent';
import { sendData } from '../../api/api';

class FormComponent extends React.Component {
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
            sendData(this.state.value, this.props.data, this.props.changeHighlighted).then(() => {
                this.props.fetchData().then(() => {
                    this.setState({...this.state, value: '', load: false})
                });
                
              })
        }
    }
    render() {
        const button = this.state.load ? <div className='loading'></div> : <ButtonSvgComponents type='submit' name={'add'} />
        return (
            <form className="shopping__form"  onSubmit={(event) => this.handleSubmit(event)}>
                <input
                readOnly={this.state.load}
                type='text' 
                placeholder='Что добавим в список' 
                value={this.state.value} 
                className='shopping__input' 
                onChange={(event) => {this.setState({...this.state, value: event.target.value})}}/>
                {button}
            </form>
            
        )
    }
}

export default FormComponent;