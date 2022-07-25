import './ShoppingItemComponent.css';
import React from 'react';
import ButtonSvgComponents from '../buttonSvgComponent/ButtonSvgComponent';
import InputItemComponent from '../InputItemComponent/InputItemComponent';

class ShoppingItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            isInput: false,
        }
        this.openInput = this.openInput.bind(this)
    }

    openInput() {
        this.setState({isInput: !this.state.isInput})
    }
    
    render() {
        const isInput = this.state.isInput ? <InputItemComponent value ={this.props.value} element={{title: this.props.element.title, id: this.props.element.id}} callback={{openInput: this.openInput, editData: this.props.callback.editData, changeStateitemValue: this.props.callback.changeStateitemValue}}/> : null;
        return (
            <div className="shopping__item" id={this.props.element.id} onDoubleClick={() => this.openInput()}>
                <p className="shopping__text">{this.props.element.title}</p>
                <ButtonSvgComponents name={'edit'} class={'shopping__icon'} iconClass={'shopping__icon'} callback={this.openInput}/>
                <ButtonSvgComponents name={'delete'} class={'shopping__icon'} iconClass={'shopping__icon'} callback={this.props.callback.deleteItems} value={[this.props.element]}/>             
                {isInput}
            </div>
        )
    }
}
export default ShoppingItemComponent