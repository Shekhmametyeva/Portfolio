import './InputItemComponent.css';
import React from 'react';
import ButtonSvgComponents from '../buttonSvgComponents/ButtonSvgComponents';

class InputItemComponent extends React.Component {

    render() {
        return(
            <div className="shopping__form shopping__item__form">
                <input autoFocus type="text" placeholder={this.props.value} className="shopping__input"/>
                <ButtonSvgComponents name={'add'} class={'shopping__icon'}/>
                <ButtonSvgComponents name={'add'} class={'close shopping__icon'} callback={this.props.callback}/>
            </div>
        )
    }
}
export default InputItemComponent
