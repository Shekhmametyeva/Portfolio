import './App.css';
import React from 'react';
import HeaderComponent from '../headerComponent/HeaderComponent';
import InputComponent from '../inputComponent/InputComponent';
import BtnDeleteComponent from '../btnDeleteComponent/BtnDeleteComponent';
import ShoppingListComponent from '../shoppingListComponent/ShoppingListComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.checkElement = this.checkElement.bind(this);
    this.changeStateValue = this.changeStateValue.bind(this);
    this.deleteItems = this.deleteItems.bind(this);
    this.state = {
      data: [],
      value: '',
    };
  }

  changeStateValue(newValue) {
    if (this.state.value !== newValue) {
      this.setState({value: newValue})
    }
  }

  fetchData(){
    fetch('http://localhost:5000/api/award?pageNumber=1&pageSize=20').then(response => {
      return response.json()
    }).then(data => {
      data.items.sort((a,b) => {
        if (!isNaN(+a.title) && !isNaN(+b.title)) {
            return a.title - b.title
        }

        return a.title.toLowerCase() >= b.title.toLowerCase() ? 1 : -1;    
    });
      this.setState({data: data.items}); 
    })  
  }

  checkElement(data) {
    this.changeStateValue('');
    const match = this.state.data.find(el => el.title === data);
    if(match) {
      const elem = document.getElementById(match.id);
      elem.animate([{backgroundColor: `transparent`}, {backgroundColor: `#05dcb57c`}], {
              duration: 300,
              iterations: 3
      });
      return
    }
    if (!data.trim()) {
      return
    }
    this.sendData(data);
  }

  sendData(data) {
    fetch('http://localhost:5000/api/award', {
      method: 'POST',
      body: JSON.stringify({title: data}),
    }).then(() => {
      this.fetchData()
    })
  }

  deleteItems(data) {
    if (!data.length) {
      return
    }
    const promiseArr = data.map((el) => fetch(`http://localhost:5000/api/award/${el.id}`, {
      method: 'DELETE',
    }));

    Promise.all(promiseArr).then(() => {
      this.fetchData() 
    });
  }
  

  componentDidMount() {
    this.fetchData();
  }


  render() {
    return (
      <div className='wrapper'>
        <div className='wrapper__ligth'>
          <div className='shopping'>
            <HeaderComponent />
            <div className="shopping__form__container">
              <InputComponent callback={this.checkElement} changeStateValue={this.changeStateValue} value={this.state.value}/>
              <BtnDeleteComponent callback={this.deleteItems} value ={this.state.data}/>
            </div>
            <ShoppingListComponent  data={this.state.data} callback={this.deleteItems}/>

          </div>
        </div>
      </div>
    )
  }
}


export default App;
