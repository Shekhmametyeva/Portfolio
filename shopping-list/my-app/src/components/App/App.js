import './App.css';
import React from 'react';
import HeaderComponent from '../headerComponent/HeaderComponent';
import InputComponent from '../inputComponent/InputComponent';
import BtnDeleteComponent from '../btnDeleteComponent/BtnDeleteComponent';

class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='wrapper__ligth'>
          <div className='shopping'>
            <HeaderComponent />
            <div className="shopping__form__container">
              <InputComponent />
              <BtnDeleteComponent />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
