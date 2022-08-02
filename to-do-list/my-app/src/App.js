import './App.css';
import FormComponent from './components/FormComponent/FormComponent';
import ToDoListComponent from './components/ToDoListComponent/ToDoListComponent';
import React, {useState} from 'react';
import HelpComponent from './components/HelpComponent/HelpComponent';


function App() {
  const [data, setData] = useState([]);
  return (
    <div className='wrapper'>
      <div className='todo'>
        <HelpComponent />
        <FormComponent data={data} updateStateValue={(value) => setData([...data, {value: value, complete: false}])}/>
        <ToDoListComponent 
            data={data} 
            updateStateData={(index, elem) => {
              setData([...data.slice(0, index), ...data.slice(index + 1, data.length), {value: elem, complete: true}])}
            }/>
      </div>
    </div>
  );
}

export default App;
