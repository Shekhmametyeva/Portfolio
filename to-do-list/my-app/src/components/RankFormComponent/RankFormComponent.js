import ButtonSvgComponent from '../ButtonSvgComponent/ButtonSvgComponent';
import './RankFormComponent.css';

function RankFormComponent (props) {
    
    const button = props.rank.map(el => {
        return (
            <div 
                key={el} 
                className={props.activeRank === el ? 'form__button active' : 'form__button'} 
                value={el}
                onClick={() => props.changeActiveRanc(el)}>
                    <ButtonSvgComponent type='button' name={el} class='rank__button'/>
                    <p>{el}</p>
                
            </div>)
    })
    return (
        <div className='form__button__container'>
            {button}
        </div>
    )
}

export default RankFormComponent