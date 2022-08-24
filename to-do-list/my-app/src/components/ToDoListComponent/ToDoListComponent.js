import ToDoItemComponent from '../ToDoItemComponent/ToDoItemComponent';
import './ToDoListComponent.css';

function ToDoListComponent (props) {
    
    const data = props.dataShow.map((el) => {
        return (
            <ToDoItemComponent 
                dataFull={props.dataFull}
                highlighted={props.highlighted === el.value}
                highlight={props.highlight}
                key={el.value} 
                index={props.data.findIndex(elem => elem.value === el.value)} 
                element={el}
                moveElAnotherDataset={props.moveElAnotherDataset}
                updateSetMenu={props.updateSetMenu} 
                deleteItem={props.deleteItem}
                editElement={props.editElement}
                inputItemOpen={props.inputItemOpen === el.value}
                updateSetinputItem={props.updateSetinputItem}
                
            />
        )
    })
    return (
        <div className='todo__container'>
            {data}
        </div>
    )
}

export default ToDoListComponent