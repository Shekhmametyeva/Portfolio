
export const checkElement = (value, data) => {
  const match = data.find(el => el.title === value);
  if(match) {
    const elem = document.getElementById(match.id);
    elem.animate([{backgroundColor: `transparent`}, {backgroundColor: `#05dcb57c`}], {
            duration: 300,
            iterations: 3
    });
    return
  }
  if (!value.trim()) {
    return
  }
  return value
}


export const editData = async (id, value, data) => {
  if(checkElement(value, data)) {
    await fetch(`http://localhost:5000/api/award/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title: value}),
    });    
  }  
}

export const sendData = async(value, data) => {
  if(checkElement(value, data)) {
    await fetch('http://localhost:5000/api/award', {
      method: 'POST',
      body: JSON.stringify({title: value}),
    })
  }  
}

export const deleteItems = (data) => {
  console.log(data)
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