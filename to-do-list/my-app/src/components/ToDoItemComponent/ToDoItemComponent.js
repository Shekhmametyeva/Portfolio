import './ToDoItemComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';
import FormItemComponent from '../FormItemComponent/FormItemComponent';



function ToDoItemComponent (props) {
    const input = props.inputItemOpen 
        ? <FormItemComponent 
                element={props.element.value} 
                rank={props.element.rank} 
                index={props.index} 
                editElement={props.editElement} 
                highlight={props.highlight} 
                closeInput={() => props.updateSetinputItem('')} 
                dataFull={props.dataFull} /> 
        : null;

    return (
        <div  
            data-testid='todo-item'
            className={props.element.complete 
                ?  (props.highlighted 
                    ? 'todo__item done highlighted' 
                    : 'todo__item done') 
                : (props.highlighted 
                    ? 'todo__item highlighted' 
                    : 'todo__item')} 
            onAnimationEnd={() => {props.highlight('')}} >
            <ButtonSvgComponent name={props.element.rank} class='todo__button' type='button'/>
            <h5 className='todo__text'>{props.element.value}</h5>
            <ButtonSvgComponent 
                callback={() => props.moveElAnotherDataset(props.index, props.element.value, props.element.rank)}
                name='complete' 
                class='todo__button todo__done'   
            />
            <ButtonSvgComponent data='edit' class='todo__button' name='edit' callback={props.updateSetinputItem} value={props.element.value} />
            <ButtonSvgComponent class='todo__button' name='delete' callback={props.deleteItem} value={props.index} />
            {input}
        </div>    
    )
}

export default ToDoItemComponent