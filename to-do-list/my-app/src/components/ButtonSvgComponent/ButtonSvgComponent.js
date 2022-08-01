import './ButtonSvgComponent.css'
import iconsSVG from '../../assets/icons/sprite.svg';

function ButtonSvgComponent (props) {
    return (
        <button className='button' type={props.type}>
            <svg width='50' height='50'>
                <use xlinkHref={`${iconsSVG}#${props.name}`} />
            </svg>
        </button>
    )
}

export default ButtonSvgComponent