import './ShoppingItemComponent.css';
import React from 'react';
import ButtonSvgComponents from '../buttonSvgComponents/ButtonSvgComponents';

class ShoppingItemComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="shopping__item">
                <p className="shopping__text">{this.props.element}</p>
                <ButtonSvgComponents name={'edit'} class={'shopping__button'} iconClass={'shopping__icon'}/>
                <ButtonSvgComponents name={'delete'} class={'shopping__button'} iconClass={'shopping__icon'}/>
            </div>
        )
    }
}
export default ShoppingItemComponent