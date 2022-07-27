import './ShoppingItemComponent.css';
import React from 'react';
import ButtonSvgComponents from '../buttonSvgComponent/ButtonSvgComponent';
import FormItemComponent from '../FormItemComponent/FormItemComponent';
import { deleteItems } from '../../api/api';

class ShoppingItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            isInput: false,
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
        return (
            <div className="shopping__item" id={this.props.element.id} onDoubleClick={() => this.props.onEditChange(this.props.element.id)}>
                <p className="shopping__text">{this.props.element.title}</p>
                <ButtonSvgComponents 
                name='edit' 
                class='shopping__icon'
                callback={() => this.props.onEditChange(this.props.element.id)}/>
                <ButtonSvgComponents 
                name='delete' 
                class='shopping__icon' 
                callback={() => {
                    deleteItems([this.props.element]).then(() => {
                        this.props.fetchData()
                    })    
                }} 
                value={[this.props.element]}/>             
                {isInput}
            </div>
        )
    }
}
export default ShoppingItemComponent