import React from 'react';
import './ButtonSvgComponent.css';
import IconsSVG from '../../assets/icons/sprite.svg';

class ButtonSvgComponents extends React.Component {

    isCallback() {
        if(this.props.callback) {
            this.props.callback(this.props.value)
            
        }
        return
    }
    
    render() {
        const isClass = this.props.class ? `icon ${this.props.class}` : `icon`;
        
        return(
            <button type={this.props.type} className='button' onClick={() => this.isCallback() }>
                <svg className={isClass}>
                    <use xlinkHref={`${IconsSVG}#${this.props.name}`} />
                </svg>
            </button>
        )
    }
}

export default ButtonSvgComponents;