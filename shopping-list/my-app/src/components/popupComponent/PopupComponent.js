import './PopupComponent.css';
import React from 'react';
import ButtonSvgComponent from '../buttonSvgComponent/ButtonSvgComponent'

class PopupComponent extends React.Component {
    render() {
        return (
            <div className="popup">
                <div className="popup__container">
                    <p className="shopping__text">Вы действительно хотите очистить весь список?</p>
                    <div>
                        <ButtonSvgComponent name={'add'} callback={this.props.callback} value ={false}/>
                        <ButtonSvgComponent name={'finish'} callback={this.props.callback} value ={true}/>  
                    </div>
                </div>
            </div>
        )
    }
}

export default PopupComponent