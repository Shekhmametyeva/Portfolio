import './ButtonSvgComponent.css'
import iconsSVG from '../../assets/icons/sprite.svg';


function ButtonSvgComponent (props) {
    return (
        <button 
            className={props.class ? `button ${props.class}` : `button`} 
            type={props.type} 
            onClick={() => {
                if(props.callback) {
                    props.callback();
                }
                
            }}>
                <svg className={props.class ? 'todo__icon' : 'icon'}>
                    <use xlinkHref={`${iconsSVG}#${props.name}`} />
                </svg>
        </button>
    )
}

export default ButtonSvgComponent