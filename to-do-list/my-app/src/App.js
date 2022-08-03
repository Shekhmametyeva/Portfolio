import './App.css';
import FormComponent from './components/FormComponent/FormComponent';
import ToDoListComponent from './components/ToDoListComponent/ToDoListComponent';
import React, {useState} from 'react';


function App() {
  const [data, setData] = useState([]);
  const [madeData, setMadeData] = useState([]);
  const [highlighted, setHighlighted] = useState();
  const [menu, setMenu] = useState('');

  const active = data.length ? <h2 className='todo__title'>Активные:</h2>: null;
  const completed = madeData.length ? <h2 className='todo__title'>Завершенные:</h2>: null;
  return (
    <div className='wrapper' onClick={(event) => {
      if(!event.target.closest('.todo__menu__button')) {
        setMenu('')
      }}}>
      <div className='todo'>
        <FormComponent 
            data={[...data, ...madeData]} 
            updateStateValue={(value) => setData([...data, {value: value, complete: false}])}
            highlight={(value) => setHighlighted(value)}
        />
        {active}
        <ToDoListComponent 
            highlighted={highlighted}
            highlight={(value) => setHighlighted(value)}
            data={[...data]} 
            updateSetData={(index, elem) => {
              setMadeData([...madeData, {value: elem, complete: true}])
              setData([...data.slice(0, index), ...data.slice(index + 1, data.length)])
            }}
            menu={menu}
            updateSetMenu={(value) => setMenu(value)}  
            deleteItem={(index) => {
              setData([...data.slice(0, index), ...data.slice(index + 1, data.length)])
            }}  
        />
        {completed}
        <ToDoListComponent 
            highlighted={highlighted}
            highlight={(value) => setHighlighted(value)}
            data={[...madeData]} 
            updateSetData={(index, elem) => {
              setData([...data, {value: elem, complete: false}])
              setMadeData([...madeData.slice(0, index), ...madeData.slice(index + 1, madeData.length)])
            }}
            menu={menu}
            updateSetMenu={(value) => setMenu(value)}    
            deleteItem={(index) => {
              setMadeData([...madeData.slice(0, index), ...madeData.slice(index + 1, madeData.length)])
            }} 
        />
      </div>
    </div>
  );
}

export default App;
