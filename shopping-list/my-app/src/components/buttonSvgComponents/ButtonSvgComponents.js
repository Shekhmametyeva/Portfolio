import React from 'react';
import './ButtonSvgComponents.css';
import IconsSVG from '../../assets/icons/sprite.svg';

class ButtonSvgComponents extends React.Component {

    isCallback() {
        if(this.props.callback) {
            this.props.callback(this.props.value)
        }
        return
    }
    
    render() {
        const isClass = this.props.class ? `button ${this.props.class}` : `button`;
        
        return(
            <button className={isClass} onClick={() => this.isCallback()}>
                <svg className={`icon`}>
                    <use xlinkHref={`${IconsSVG}#${this.props.name}`} />
                </svg>
            </button>
        )
    }
}

export default ButtonSvgComponents;