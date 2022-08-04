export function checkValidity (props, value, setValue, setValid) {
    console.log(props.dataFull)
    if(!value.trim()) {
        setValid('поле не заполнено')
        setTimeout(() => {
            setValue()
            setValid(false)
        }, 1500);
        return null
    }
    if(props.element === value.trim()) {
        props.closeInput()
        return null
    }
    if(props.dataFull.find(el => el.value === value.trim())) {
        props.highlight(value.trim())
        setValid(true)
        setTimeout(() => {
            setValue()
            setValid(false)
        }, 1500);
        return null
    }
    setValue()
    return value.trim()
}