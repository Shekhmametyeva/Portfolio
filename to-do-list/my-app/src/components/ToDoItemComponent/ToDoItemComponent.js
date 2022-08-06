import './ToDoItemComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';
import FormItemComponent from '../FormItemComponent/FormItemComponent';
import MenuComponent from '../MenuComponent/MenuComponent';



function ToDoItemComponent (props) {
    const input = props.inputItemOpen 
        ? <FormItemComponent 
                element={props.element.value} 
                rank={props.element.rank} 
                index={props.index} 
                updateStateData={props.updateStateData} 
                highlight={props.highlight} 
                closeInput={() => props.updateSetinputItem('')} 
                dataFull={props.dataFull} /> 
        : null
    
    const openMenu = props.menu 
        ? <MenuComponent 
            component={[
                {text: 'Удалить', button: 'delete', callback: props.deleteItem, value: props.index}, 
                {text: 'Редактировать', button: 'edit', callback: props.updateSetinputItem, value: props.element.value}
            ]}/>
        : null;

    return (
        <div  
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
                callback={() => props.updateSetData(props.index, props.element.value, props.element.rank)}
                name='complete' 
                class='todo__button'   
            />
            <ButtonSvgComponent 
                callback={props.updateSetMenu}
                value={props.menu ? '' : props.element.value}
                name='menu' 
                class='todo__button todo__menu__button'   
            />
            {openMenu}
            {input}
        </div>    
    )
}

export default ToDoItemComponent