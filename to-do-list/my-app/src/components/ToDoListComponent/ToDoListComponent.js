import ToDoItemComponent from '../ToDoItemComponent/ToDoItemComponent';
import './ToDoListComponent.css';

function ToDoListComponent (props) {
    const data = props.data.map((el, index) => <ToDoItemComponent key={el.value} index={index} element={el.value} complite={el.complete} updateStateData={props.updateStateData}/>)
    return (
        <div className='todo__container'>
            {data}
        </div>
    )
}

export default ToDoListComponent