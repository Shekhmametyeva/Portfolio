import './App.css';
import FormComponent from './components/FormComponent/FormComponent';
import ToDoListComponent from './components/ToDoListComponent/ToDoListComponent';
import React, {useState} from 'react';
import SortComponent from './components/SortComponent/SortComponent';
import { sortFunction } from './helperFunctions/helperFunctions';

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
            editStateData={(value, rank) => setData([...data, {value: value, complete: false, rank: rank}])}
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
            dataShow={ 
              rank === 'Все' 
              ? sort 
                ? sortFunction([...data]) 
                : [...data] 
              : sort 
                ? sortFunction([...data].filter(el => el.rank === rank))
                : [...data].filter(el => el.rank === rank) 
            }
            updateSetData={(index, elem, rank) => {
              setMadeData([...madeData, {value: elem, complete: true, rank: rank}])
              setData([...data.slice(0, index), ...data.slice(index + 1, data.length)])
            }}
            menu={menu}
            updateSetMenu={(value) => setMenu(value)}  
            deleteItem={(index) => setData([...data.slice(0, index), ...data.slice(index + 1, data.length)])}  
            dataFull={[...data, ...madeData]} 
            inputItemOpen={inputItemOpen}
            updateSetinputItem={(value) => {
              setInputItemOpen(value)}}
            updateStateData={(index, value, rank) => setData([...data.slice(0, index), {value: value, complete: false, rank: rank}, ...data.slice(index + 1, data.length)])}
        />
        {completed}
        <ToDoListComponent 
            highlighted={highlighted}
            highlight={(value) => setHighlighted(value)}
            data={madeData}
            dataShow={ 
              rank === 'Все' 
              ? sort 
                ? sortFunction([...madeData]) 
                : [...madeData] 
              : sort 
                ? sortFunction([...madeData].filter(el => el.rank === rank))
                : [...madeData].filter(el => el.rank === rank) 
            }
            updateSetData={(index, elem, rank) => {
              setData([...data, {value: elem, complete: false, rank: rank}])
              setMadeData([...madeData.slice(0, index), ...madeData.slice(index + 1, madeData.length)])
            }}
            menu={menu}
            updateSetMenu={(value) => setMenu(value)}    
            deleteItem={(index) => setMadeData([...madeData.slice(0, index), ...madeData.slice(index + 1, madeData.length)])} 
            dataFull={[...data, ...madeData]} 
            inputItemOpen={inputItemOpen}
            updateSetinputItem={(value) => setInputItemOpen(value)}
            updateStateData={(index, value, rank) => setMadeData([...madeData.slice(0, index), {value: value, complete: true, rank: rank}, ...madeData.slice(index + 1, madeData.length)])}
        />
      </div>
    </div>
  );
}

export default App;
