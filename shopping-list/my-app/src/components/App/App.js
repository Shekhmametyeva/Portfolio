import './App.css';
import React from 'react';
import HeaderComponent from '../headerComponent/HeaderComponent';
import InputComponent from '../inputComponent/InputComponent';
import BtnDeleteComponent from '../btnDeleteComponent/BtnDeleteComponent';
import ShoppingListComponent from '../shoppingListComponent/ShoppingListComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.state = {
      data: []
    };
  }

  fetchData(){
    fetch('http://localhost:5000/api/award?pageNumber=1&pageSize=10').then(response => {
      return response.json()
    }).then(data => {
      this.setState({data: data.items}); 
    })  
  }

  componentDidMount() {
    this.fetchData()
  }

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
            <ShoppingListComponent  data={this.state.data}/>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
