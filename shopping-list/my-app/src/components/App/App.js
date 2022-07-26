import './App.css';
import React from 'react';
import HeaderComponent from '../headerComponent/HeaderComponent';
import FormComponent from '../inputComponent/FormComponent';
import ShoppingListComponent from '../shoppingListComponent/ShoppingListComponent';
import PopupComponent from '../popupComponent/PopupComponent';
import ButtonSvgComponents from '../buttonSvgComponent/ButtonSvgComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
    this.changeStateValue = this.changeStateValue.bind(this);
    this.changeStateitemValue = this.changeStateitemValue.bind(this);
    this.deleteItems = this.deleteItems.bind(this);
    this.changeStatePopup = this.changeStatePopup.bind(this);
    this.editData = this.editData.bind(this)
    this.state = {
      data: [],
      value: '',
      itemValue: '',
      isPopup: false,
      load: false,
    };

    window.addEventListener('keydown', (event) => {
      console.log('eror')
      if(event.key === 'Enter') {
        if(document.activeElement.classList[0] === 'shopping__input') {
          this.sendData(this.state.value);
          return
        }
        if(this.state.isPopup) {
          this.changeStatePopup(this.state.isPopup)
        }
      }
      
  })
  }

  changeStatePopup(value) {
    if (value) {
      this.deleteItems(this.state.data)
    }
    this.setState({isPopup: !this.state.isPopup})
  }

  changeStateitemValue(newValue) {
    if (this.state.itemValue !== newValue) {
      this.setState({itemValue: newValue})
    }
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
    this.changeStateitemValue('')
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
    return data
  }

  sendData(data) {
    if(this.checkElement(data)) {
      fetch('http://localhost:5000/api/award', {
        method: 'POST',
        body: JSON.stringify({title: data}),
      }).then(() => {
        
        this.fetchData();
      })
    }  
  }

  editData(id, data) {
    if(this.checkElement(data)) {
      fetch(`http://localhost:5000/api/award/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title: data}),
    }).then(() => {
      this.fetchData()
    })
    }  
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
    const popup = this.state.isPopup ? <PopupComponent callback={this.changeStatePopup} /> : null;
    const load = this.state.load ? 
    <div className='load'></div> : 
    <ShoppingListComponent  
    data={this.state.data} 
    callback={{deleteItems: this.deleteItems, editData: this.editData, changeStateitemValue: this.changeStateitemValue}} 
    value={this.state.itemValue}/>
    return (
      <div className='wrapper'>
        <div className='wrapper__ligth'>
          <div className='shopping'>
            <HeaderComponent />
            <div className="shopping__form__container">
              <FormComponent callback={this.sendData} changeStateValue={this.changeStateValue} value={this.state.value}/>
              <ButtonSvgComponents name={'delete'} callback={this.changeStatePopup} value={this.props.value}/>
            </div>
            {load}
            {popup}  
          </div>
        </div>
      </div>
    )
  }
}


export default App;
