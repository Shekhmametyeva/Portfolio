import './BtnDeleteComponent.css';
import React from 'react';
import ButtonSvgComponents from '../buttonSvgComponents/ButtonSvgComponents';

class BtnDeleteComponent extends React.Component {
    render() {
        return(
            <ButtonSvgComponents name={'delete'} class={'shopping__button'} />
        )
    }
}

export default BtnDeleteComponent