import './MenuItemComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';

function MenuItemComponent (props) {
    return (
        <div className='todo__menu' >
            <div className='todo__menu__item' onClick={() => props.deleteItem(props.index)}>
                <p>Удалить</p>
                <ButtonSvgComponent name='delete' class='todo__button'/>
            </div>
            <div className='todo__menu__item' onClick={() => props.updateSetinputItem(props.element)}>
                <p>Редактировать</p>
                <ButtonSvgComponent name='edit' class='todo__button'/>
            </div>
        </div>
    )
}

export default MenuItemComponent