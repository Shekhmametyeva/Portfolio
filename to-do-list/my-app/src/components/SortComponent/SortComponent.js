import './SortComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';
import MenuComponent from '../MenuComponent/MenuComponent';

function SortComponent (props) {

  const menuSort = props.menuSort
        ? <MenuComponent 
            component={[
                {text: 'По хронологии', button: 'arrow', active: !props.active, callback: props.changeActive, value: false}, 
                {text: 'По алфавиту', button: 'arrow', active: props.active, callback: props.changeActive, value: true}
            ]}
            class='sort__menu'/>
        : null;
  const rank = props.rank.map(el => {
    return {text: el, button: el, callback: props.setRank, value: el}
  })
  const menuRank = props.menuRank
        ? <MenuComponent 
            component={[{text: 'Все', callback: props.setRank, value: 'Все'}, ...rank]}
            class='rank__menu'/>
        : null;
  return (
      <div className='sort__container'>
          <div className={props.disabled ? 'sort__button sort__button_disabled' : 'sort__button'} onClick={() => {if(!props.disabled) props.setMenuRank()}} >
            <p className='sort__text'>All</p>   
            <ButtonSvgComponent type='button' name='arrow' class='rank__button'/>
            {menuRank}
          </div>
          <div className={props.disabled ? 'sort__button sort__button_disabled' : 'sort__button'} onClick={() => {if(!props.disabled) props.setMenuSort()}}>
            <ButtonSvgComponent class='todo__button' name='sort' type='button' />
            {menuSort}
          </div>
      </div>
  )
}

export default SortComponent