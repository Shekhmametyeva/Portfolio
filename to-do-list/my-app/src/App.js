import './App.css';
import FormComponent from './components/FormComponent/FormComponent';
import ToDoListComponent from './components/ToDoListComponent/ToDoListComponent';
import React, {useState} from 'react';
import SortComponent from './components/SortComponent/SortComponent';
import { toggleSorting } from './helperFunctions/helperFunctions';
import { addElementToDataFun, moveElToCompletedFun, editElementFun, deleteElementFun } from './helperFunctions/updateData';


function App() {
  const [data, setData] = useState([]);
  const [madeData, setMadeData] = useState([]);
  const [highlighted, setHighlighted] = useState();
  const [menu, setMenu] = useState('');
  const [inputItemOpen, setInputItemOpen] = useState(false);
  const [menuRank, setMenuRank] = useState(false);
  const [menuSort, setMenuSort] = useState(false);
  const [sort, setSort] = useState(false);
  const [rank, setRank] = useState('Все');
  const ranksList = ['Личные', 'Семья', 'Работа', 'Покупки', 'Учеба'];

  const active = data.length ? <h2 className='todo__title'>Активные:</h2>: null;
  const completed = madeData.length ? <h2 className='todo__title'>Завершенные:</h2>: null;
  const buttonSort = [...data, ...madeData].length 
    ? <SortComponent 
      setRank={(value) => setRank(value)} 
      changeActive={(value) => setSort(value)} 
      active={sort} 
      ranksList={ranksList} 
      rank={rank}
      menuRank={menuRank} 
      setMenuRank={() => setMenuRank(!menuRank)} 
      menuSort={menuSort} 
      setMenuSort={() => setMenuSort(!menuSort)}/>
    : null

  return (
    <div className='wrapper' onClick={(event) => {
      if(!event.target.closest('.todo__menu__button')) {
        setMenu('')
      }
      if(inputItemOpen && !event.target.closest('.todo__item__form')){
        setInputItemOpen('')
      }
      if(menuRank && !event.target.closest('.sort__menu')){
        setMenuRank(false)
      }
      if(menuSort && !event.target.closest('.sort__menu')){
        setMenuSort(false)
      }
      }}>
      <div className='todo'>
        <FormComponent 
            dataFull={[...data, ...madeData]} 
            addElementToData ={(value, rank) => addElementToDataFun(setData, data, value, rank)}
            highlight={(value) => setHighlighted(value)}
            ranksList={ranksList}
            rank={rank}
            changeRank={() => setRank('Все')}
        />
        {buttonSort}
        {active}
        <ToDoListComponent 
            highlighted={highlighted}
            highlight={(value) => setHighlighted(value)}
            data={data}
            dataShow={ toggleSorting (rank, sort, data) }
            moveElAnotherDataset={(index, elem, rank) => {
              moveElToCompletedFun(setMadeData, madeData, setData, data, index, elem, rank, true)
            }}
            menu={menu}
            updateSetMenu={(value) => setMenu(value)}  
            deleteItem={(index) => deleteElementFun(setData, data, index)}   
            dataFull={[...data, ...madeData]} 
            inputItemOpen={inputItemOpen}
            updateSetinputItem={(value) => {
              setInputItemOpen(value)}}
            editElement={(index, value, rank) => editElementFun(setData, data, index, value, rank, false)}
        />
        {completed}
        <ToDoListComponent 
            highlighted={highlighted}
            highlight={(value) => setHighlighted(value)}
            data={madeData}
            dataShow={ toggleSorting (rank, sort, madeData) }
            moveElAnotherDataset={(index, elem, rank) => {
              moveElToCompletedFun(setData, data, setMadeData, madeData, index, elem, rank, false)
            }}
            menu={menu}
            updateSetMenu={(value) => setMenu(value)}    
            deleteItem={(index) => deleteElementFun(setMadeData, madeData, index)}   
            dataFull={[...data, ...madeData]} 
            inputItemOpen={inputItemOpen}
            updateSetinputItem={(value) => setInputItemOpen(value)}
            editElement={(index, value, rank) => editElementFun(setMadeData, madeData, index, value, rank, true)}
        />
      </div>
    </div>
  );
}

export default App;
