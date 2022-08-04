import ToDoItemComponent from '../ToDoItemComponent/ToDoItemComponent';
import './ToDoListComponent.css';

function ToDoListComponent (props) {
    
    const data = props.data.map((el, index) => {
        return (
            <ToDoItemComponent 
                dataFull={props.dataFull}
                highlighted={props.highlighted === el.value}
                highlight={props.highlight}
                key={el.value} 
                index={index} 
                element={el}
                updateSetData={props.updateSetData}
                menu={props.menu === el.value}
                updateSetMenu={props.updateSetMenu} 
                deleteItem={props.deleteItem}
                updateStateData={props.updateStateData}
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