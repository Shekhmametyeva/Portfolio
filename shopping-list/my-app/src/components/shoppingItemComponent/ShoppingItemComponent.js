import './ShoppingItemComponent.css';
import React from 'react';
import ButtonSvgComponents from '../buttonSvgComponent/ButtonSvgComponent';
import FormItemComponent from '../FormItemComponent/FormItemComponent';

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
        value ={this.props.value} 
        element={{title: this.props.element.title, id: this.props.element.id}} 
        callback={{openForm: () => this.props.onEditChange(''), fetchData: this.props.callback.fetchData, changeStateitemValue: this.props.callback.changeStateitemValue}}/> : null;
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
                callback={this.props.callback.deleteItems} 
                value={[this.props.element]}/>             
                {isInput}
            </div>
        )
    }
}
export default ShoppingItemComponent