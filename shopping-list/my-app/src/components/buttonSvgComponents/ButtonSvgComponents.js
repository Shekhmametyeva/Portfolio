import React from 'react';
import './ButtonSvgComponents.css';
import IconsSVG from '../../assets/icons/sprite.svg';

class ButtonSvgComponents extends React.Component {
    
    render() {
        const isClass = this.props.class ? `button ${this.props.class}` : `button`;
        return(
            <button className={isClass} onClick={() => this.props.callback(this.props.value)}>
                <svg className={`icon`}>
                    <use xlinkHref={`${IconsSVG}#${this.props.name}` } />
                </svg>
            </button>
        )
    }
}

export default ButtonSvgComponents;