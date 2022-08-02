import './ToDoItemComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';

function ToDoItemComponent (props) {
    if(props.complite) {
        return (
            <div className='todo__item done' >
                <h5 className='todo__text'>{props.element}</h5>
            </div>
        )
    }
    return (
        <div className='todo__item' >
            <h5 className='todo__text'>{props.element}</h5>
            <ButtonSvgComponent 
                callback={() => {props.updateStateData(props.index, props.element)}}
                name='complete' 
                class='todo__button'   
            />
        </div>
        
    )
}

export default ToDoItemComponent