export function checkValidity (props, value, setValue, setValid) {
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

export function sortFunction (arr) {
    arr.sort((a,b) => {
      if (!isNaN(+a.value) && !isNaN(+b.value)) {
          return a.value - b.value
      }
      return a.value.toLowerCase() >= b.value.toLowerCase() ? 1 : -1;    
    });
    return arr
  }