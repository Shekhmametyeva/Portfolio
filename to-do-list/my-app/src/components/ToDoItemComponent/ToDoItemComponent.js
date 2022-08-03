import './ToDoItemComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';

function ToDoItemComponent (props) {
    return (
        <div  
            className={props.complite ?  (props.highlighted ? 'todo__item done highlighted' : 'todo__item done') : (props.highlighted ? 'todo__item highlighted' : 'todo__item')} 
            onAnimationEnd={() => {props.highlight('')}} >
                <h5 className='todo__text'>{props.element}</h5>
                <ButtonSvgComponent 
                    callback={() => {
                        props.updateSetData(props.index, props.element)
                    }}
                    name='complete' 
                    class='todo__button'   
                />
        </div>
        
    )
}

export default ToDoItemComponent