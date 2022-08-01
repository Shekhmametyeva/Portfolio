import './HeaderComponent.css';
import icon from '../../assets/icons/icon.png';
import React from 'react';
import ButtonSvgComponents from '../buttonSvgComponent/ButtonSvgComponent';

class HeaderComponent extends React.Component {
    render() {
        return(
            <div className='shopping__header'>
                <img src={icon} className='shopping__logo' alt='logo' />
                <h1 className='shopping__title'>Список покупок</h1>
                <ButtonSvgComponents name='user' />
            </div>
        )
    }
}

export default HeaderComponent;