import './ButtonSvgComponent.css'
import iconsSVG from '../../assets/icons/sprite.svg';


function ButtonSvgComponent (props) {
    return (
        <button 
            disabled={props.disabled}
            className={props.class ? `${props.class} button` : `button`}
            type={props.type} 
            onClick={() => {
                if(props.callback) {
                    if (props.value) {
                        props.callback(props.value)
                    } else {
                        props.callback();
                    }
                }
            }}>
            <svg className='icon'>
                <use xlinkHref={`${iconsSVG}#${props.name}`} />
            </svg>
        </button>
    )
}

export default ButtonSvgComponent