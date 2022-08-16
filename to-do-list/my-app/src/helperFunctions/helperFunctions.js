export function checkValidity (dataFull, value) {
    if(!value.trim()) {
        return null
    }
    if(dataFull.find(el => el.value === value.trim())) {
        return 'found'
    }
    return value.trim()
}

export function handleInvalidValue (resultValidation, setValue, setValid, highlight, value) {
    if(!resultValidation) {
        setValid('поле не заполнено')
        setTimeout(() => {
            setValue()
            setValid(false)
        }, 1500);
        return 
    }
    if (resultValidation === 'found') {
        highlight(value)
        setValid(true)
        setTimeout(() => {
            setValue()
            setValid(false)
        }, 1500);
        return 
    }
    return true
}
 
function sortFunction (arr) {
    arr.sort((a,b) => {
      if (!isNaN(+a.value) && !isNaN(+b.value)) {
          return a.value - b.value
      }
      return a.value.toLowerCase() >= b.value.toLowerCase() ? 1 : -1;    
    });
    return arr
}

export function toggleSorting (rank, sort, data) {
    if (rank === 'Все') {
        return sort ? sortFunction([...data]) : [...data] 
    }
    return sort 
        ? sortFunction([...data].filter(el => el.rank === rank))
        : [...data].filter(el => el.rank === rank) 
}