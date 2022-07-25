import './InputItemComponent.css';
import React from 'react';
import ButtonSvgComponents from '../buttonSvgComponent/ButtonSvgComponent';

class InputItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.editData = this.editData.bind(this)
    }
    editData() {
        this.props.callback.editData(this.props.element.id, this.props.value);
        this.props.callback.openInput()
    }
    render() {
        return(
            <div className="shopping__form shopping__item__form">
                <input autoFocus type="text" value={this.props.value} placeholder={this.props.element.title} className="shopping__input" onChange={(event) => {this.props.callback.changeStateitemValue(event.target.value)}}/>
                <ButtonSvgComponents name={'add'} class={'shopping__icon'} callback={this.editData} />
                <ButtonSvgComponents name={'add'} class={'close shopping__icon'} callback={this.props.callback.openInput}/>
            </div>
        )
    }
}
export default InputItemComponent
