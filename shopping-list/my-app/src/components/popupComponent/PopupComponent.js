import './PopupComponent.css';
import React from 'react';
import ButtonSvgComponent from '../buttonSvgComponents/ButtonSvgComponents'

class PopupComponent extends React.Component {
    render() {
        return (
            <div className="popup">
                <div className="popup__container">
                    <p className="shopping__text">Вы действительно хотите очистить весь список?</p>
                    <div>
                        <ButtonSvgComponent name={'add'} class={'close shopping__button'} callback={this.props.callback} value ={false}/>
                        <ButtonSvgComponent name={'finish'} class={'shopping__button'} callback={this.props.callback} value ={true}/>  
                    </div>
                </div>
            </div>
        )
    }
}

export default PopupComponent