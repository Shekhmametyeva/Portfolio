import './PopupComponent.css';
import React from 'react';
import ButtonSvgComponent from '../buttonSvgComponent/ButtonSvgComponent'
import { deleteItems } from '../../api/api';

class PopupComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            load: false
        }
    }
    handleSubmit() {
        this.setState({...this.state, load: true})
        deleteItems(this.props.data).then(() => {
            this.props.fetchData()}).then(() => {
                this.setState({...this.state, load: false})
                this.handleReset()
            })        
    }

    handleReset() {
        this.props.callback()
    }

    


    render() {
        const load = this.state.load ? 
        <div className='load'></div> :
        <div className="popup__container">
            <p className="shopping__text">Вы действительно хотите очистить весь список?</p>
            <div >
                <ButtonSvgComponent name='add' callback={() => this.handleReset()} class='close'/>
                <ButtonSvgComponent type='submit' name='finish' callback={() => this.handleSubmit()} />  
            </div>
        </div>
        if (!this.props.isPopup) {
            return
        }
        return (
            <div className="popup">
                {load}
                
            </div>
        )
    }
}

export default PopupComponent