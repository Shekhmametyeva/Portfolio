import './MenuComponent.css';
import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';

function MenuComponent (props) {
    const components = props.component.map(el => {
        const button = el.button ? <ButtonSvgComponent name={el.button} class='todo__button'/> : null;
        return (
            <div key={el.text} className='todo__menu__item' onClick={() => el.callback(el.value)}>
                <p>{el.text}</p>
                {button}
            </div>
        )
    })

    return (
        <div className='todo__menu' >
            {components}
        </div>
    )
}

export default MenuComponent