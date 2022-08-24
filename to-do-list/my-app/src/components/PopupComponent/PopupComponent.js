import './PopupComponent.css';
import React from 'react';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';


function PopupComponent (props) {
    return (
        <div className="popup">
            <div className="popup__container">
                <p className="popup__text">Вы действительно хотите очистить весь список?</p>
                <div className='popup__btn__container'>
                    <ButtonSvgComponent name='close' callback={props.setPopup} />
                    <ButtonSvgComponent name='done' class='popup__btn_done' callback={() => {
                        props.setPopup()
                        props.delete()
                    }}/>  
                </div>  
            </div>  
        </div>
    )
}



export default PopupComponent