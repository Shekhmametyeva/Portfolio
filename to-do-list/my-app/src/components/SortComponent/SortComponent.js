import './SortComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';

function SortComponent (props) {
    return (
        <div className='sort__container'>
            <div className='sort__button'>
              <p className='sort__text'>All</p>   
              <ButtonSvgComponent type='button' name='arrow' class='rank__button'/>
            </div>
            <div className='sort__button'>
              <ButtonSvgComponent class='todo__button' name='sort' type='button' />
            </div>
        </div>
    )
}

export default SortComponent