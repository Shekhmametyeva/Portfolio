import ToDoItemComponent from '../ToDoItemComponent/ToDoItemComponent';
import './ToDoListComponent.css';

function ToDoListComponent (props) {
    const data = props.data.map(el => <ToDoItemComponent key={el} element={el}/>)
    return (
        <div className='todo__container'>
            {data}
        </div>
    )
}

export default ToDoListComponent