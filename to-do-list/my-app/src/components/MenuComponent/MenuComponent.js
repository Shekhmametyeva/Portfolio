import './MenuComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';

function MenuComponent (props) {
    const components = props.component.map(el => {
        const button = el.button ? <ButtonSvgComponent name={el.button} class='todo__button'/> : null;
        return (
            <div key={el.text} className={el.active ? 'todo__menu__item todo__menu_active' : 'todo__menu__item'} onClick={() => el.callback(el.value)}>
                <p>{el.text}</p>
                {button}
            </div>
        )
    })

    return (
        <div className={props.class ? `${props.class} todo__menu` : `todo__menu`}>
            {components}
        </div>
    )
}

export default MenuComponent