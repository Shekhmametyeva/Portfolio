import React from 'react';
import './ButtonSvgComponents.css';
import IconsSVG from '../../assets/icons/sprite.svg';

class ButtonSvgComponents extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <button className={`button ${this.props.class}`}>
                <svg className={`icon ${this.props.iconClass}`}>
                    <use xlinkHref={`${IconsSVG}#${this.props.name}` } />
                </svg>
            </button>
        )
    }
}

export default ButtonSvgComponents;