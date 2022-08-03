import ToDoItemComponent from '../ToDoItemComponent/ToDoItemComponent';
import './ToDoListComponent.css';

function ToDoListComponent (props) {
    
    const data = props.data.map((el, index) => {
        return (
            <ToDoItemComponent 
                highlighted={props.highlighted === el.value}
                highlight={props.highlight}
                key={el.value} 
                index={index} 
                element={el.value} 
                complite={el.complete} 
                updateSetData={props.updateSetData}
                menu={props.menu === el.value}
                updateSetMenu={props.updateSetMenu} 
                deleteItem={props.deleteItem}
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