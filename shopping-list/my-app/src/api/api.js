/* export const deleteAward = (id) => {
    fetch('');
}

export const deleteAwards = ids => {
    ids.map()
}

import { deleteAward } from '../../api/api';

 */
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