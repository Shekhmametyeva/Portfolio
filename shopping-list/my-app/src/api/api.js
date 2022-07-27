
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


export const deleteItems = (data) => {
  console.log(data)
    return Promise.all(data.map((el) => fetch(`http://localhost:5000/api/award/${el.id}`, {
        method: 'DELETE',
    })))
}