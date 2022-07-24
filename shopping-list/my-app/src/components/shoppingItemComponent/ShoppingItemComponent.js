import './ShoppingItemComponent.css';
import React from 'react';
import ButtonSvgComponents from '../buttonSvgComponents/ButtonSvgComponents';

class ShoppingItemComponent extends React.Component {
    
    render() {
        return (
            <div className="shopping__item" id={this.props.element.id}>
                <p className="shopping__text">{this.props.element.title}</p>
                <ButtonSvgComponents name={'edit'} class={'shopping__button'} iconClass={'shopping__icon'}/>
                <ButtonSvgComponents name={'delete'} class={'shopping__button'} iconClass={'shopping__icon'} callback={this.props.callback} value={[this.props.element]}/>
            </div>
        )
    }
}
export default ShoppingItemComponent