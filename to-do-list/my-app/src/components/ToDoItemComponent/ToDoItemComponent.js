import './ToDoItemComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';

function ToDoItemComponent (props) {
    return (
        <div className='todo__item'>
            <h5 className='todo__text'>{props.element}</h5>
            <ButtonSvgComponent name='done' class='todo__button'/>
        </div>
        
    )
}

export default ToDoItemComponent