import './ShoppingItemComponent.css';
import React from 'react';
import ButtonSvgComponents from '../buttonSvgComponent/ButtonSvgComponent';
import FormItemComponent from '../FormItemComponent/FormItemComponent';
import { deleteItems } from '../../api/api';

class ShoppingItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            load: false,
        }
    }
    
    render() {
        const isInput = this.props.isInput ? 
        <FormItemComponent 
        data={this.props.data}
        element={{title: this.props.element.title, id: this.props.element.id}} 
        onEditChange={() => this.props.onEditChange('')} 
        fetchData={this.props.fetchData} /> :
        null;
        const button = this.state.load ? 
        <div className='loading'></div> : 
        <ButtonSvgComponents 
            name='delete' 
            class='shopping__icon' 
            callback={() => {
                this.setState({...this.state, load: true,})
                deleteItems([this.props.element]).then(() => {
                    this.props.fetchData();
                }).then(() => {
                    this.setState({...this.state, load: false,})
                })
            }} 
            value={[this.props.element]}
        /> ;
        return (
            <div className="shopping__item" id={this.props.element.id} onDoubleClick={() => this.props.onEditChange(this.props.element.id)}>
                <p className="shopping__text">{this.props.element.title}</p>
                <ButtonSvgComponents 
                name='edit' 
                class='shopping__icon'
                callback={() => this.props.onEditChange(this.props.element.id)}/>
                {button}        
                {isInput}
            </div>
        )
    }
}
export default ShoppingItemComponent