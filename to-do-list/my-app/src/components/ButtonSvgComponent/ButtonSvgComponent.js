import './ButtonSvgComponent.css'
import iconsSVG from '../../assets/icons/sprite.svg';


function ButtonSvgComponent (props) {
    return (
        <button 
            disabled={props.disabled}
            className={props.class ? `button todo__button` : `button`}
            type={props.type} 
            onClick={() => {
                if(props.callback) {
                    props.callback();
                }
                
            }}>
                <svg className='icon'>
                    <use xlinkHref={`${iconsSVG}#${props.name}`} />
                </svg>
        </button>
    )
}

export default ButtonSvgComponent