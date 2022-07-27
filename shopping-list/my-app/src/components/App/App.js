import './App.css';
import React from 'react';
import HeaderComponent from '../headerComponent/HeaderComponent';
import FormComponent from '../FormComponent/FormComponent';
import ShoppingListComponent from '../shoppingListComponent/ShoppingListComponent';
import PopupComponent from '../popupComponent/PopupComponent';
import ButtonSvgComponents from '../buttonSvgComponent/ButtonSvgComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeStatePopup = this.changeStatePopup.bind(this);
    this.fetchData = this.fetchData.bind(this)
    this.state = {
      data: [],
      itemValue: '',
      isPopup: false,
      load: true,
    };
  }

  changeStatePopup() {
    this.setState({...this.state, isPopup: !this.state.isPopup});
  }


  async fetchData(){
    const res = await fetch('http://localhost:5000/api/award?pageNumber=1&pageSize=20');
    const data = await res.json();
    data.items.sort((a,b) => {
      if (!isNaN(+a.title) && !isNaN(+b.title)) {
          return a.title - b.title
      }
      return a.title.toLowerCase() >= b.title.toLowerCase() ? 1 : -1;    
    });
    this.setState({...this.state, data: data.items, load: false}); 
  }

  
  

  componentDidMount() {
    this.fetchData();
  }


  render() {
    const load = this.state.load ? 
    <div className='load'></div> : 
    <ShoppingListComponent  
    load={this.state.load}
    data={this.state.data} 
    callback={{deleteItems: this.deleteItems, fetchData: this.fetchData}} 
    value={this.state.itemValue}/>
    return (
      <div className='wrapper'>
        <div className='wrapper__ligth'>
          <div className='shopping'>
            <HeaderComponent />
            <div className="shopping__container">
              <FormComponent 
              fetchData={this.fetchData} 
              data={this.state.data}/>
              <ButtonSvgComponents 
              disabled={!this.state.data.length}
              name='delete' 
              callback={this.changeStatePopup} 
              value={this.props.value}/>
            </div>
            {load}
            <PopupComponent data={this.state.data} isPopup={this.state.isPopup}  callback={this.changeStatePopup} fetchData={this.fetchData} />  
          </div>
        </div>
      </div>
    )
  }
}


export default App;
