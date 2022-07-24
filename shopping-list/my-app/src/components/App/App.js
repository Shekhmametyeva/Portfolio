import './App.css';
import React from 'react';
import HeaderComponent from '../headerComponent/HeaderComponent';

class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='wrapper__ligth'>
          <div className='shopping'>
            <HeaderComponent />
          </div>
        </div>
      </div>
    )
  }
}


export default App;
