
export const checkElement = (value, data, changeHighlighted) => {
  const match = data.find(el => el.title === value);
  if(match) {
    changeHighlighted(match.id)
    return
  }
  if (!value.trim()) {
    return
  }
  return value
}


export const editData = async (id, value, data, changeHighlighted) => {
  if(checkElement(value, data, changeHighlighted)) {
    await fetch(`http://localhost:5000/api/award/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title: value}),
    });    
  }  
}

export const sendData = async(value, data, changeHighlighted) => {
  if(checkElement(value, data, changeHighlighted)) {
    await fetch('http://localhost:5000/api/award', {
      method: 'POST',
      body: JSON.stringify({title: value}),
    })
  }  
}

export const deleteItems = (data) => {
    return Promise.all(data.map((el) => fetch(`http://localhost:5000/api/award/${el.id}`, {
        method: 'DELETE',
    })))
}



export const sort = (arr) => {
  arr.sort((a,b) => {
    if (!isNaN(+a.title) && !isNaN(+b.title)) {
        return a.title - b.title
    }
    return a.title.toLowerCase() >= b.title.toLowerCase() ? 1 : -1;    
  });
  return arr
}