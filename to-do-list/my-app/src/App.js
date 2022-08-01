import './App.css';
import FormComponent from './components/FormComponent/FormComponent';
import ToDoListComponent from './components/ToDoListComponent/ToDoListComponent';
import React, {useState} from 'react';


function App() {
  const [data, setData] = useState([]);
  return (
    <div className='wrapper'>
      <div className='todo'>
        <FormComponent data={data} updateState={(value) => setData((arr) => [...arr, value])}/>
        <ToDoListComponent data={data}/>
      </div>
    </div>
  );
}

export default App;
