import './App.css';
import React from 'react';
import HeaderComponent from '../headerComponent/HeaderComponent';
import FormComponent from '../FormComponent/FormComponent';
import ShoppingListComponent from '../shoppingListComponent/ShoppingListComponent';
import PopupComponent from '../popupComponent/PopupComponent';
import ButtonSvgComponents from '../buttonSvgComponent/ButtonSvgComponent';
import {sort} from '../../api/api'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isPopup: false,
      load: true,
      highlightedItemId: ''
    };
  }

  async fetchData() {
    try {
      this.setState({...this.state, load: true});
      const res = await fetch('http://localhost:5000/api/award?pageNumber=1&pageSize=20');
      const json = await res.json();
      const data = sort(json.items)
      this.setState({...this.state, data: data, load: false}); 
    } catch {
      console.log('Сервер не работает');
      this.setState({...this.state, data: null, load: false}); 
    } 
    
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const load = this.state.data 
    ? this.state.load 
    ? <div className='load'></div> 
    : (<ShoppingListComponent  
          highlightedItemId={this.state.highlightedItemId}
          changeHighlighted ={(foundId) => this.setState({...this.state, highlightedItemId: foundId})}
          data={this.state.data} 
          deleteItems={this.deleteItems}
          fetchData={() => this.fetchData()}
      />) 
      : <div>Сервер не работает</div> ; 

    return (
      <div className='wrapper'>
        <div className='wrapper__ligth'>
          <div className='shopping'>
            <HeaderComponent />
            <div className="shopping__container">
              <FormComponent 
                  fetchData={() => this.fetchData()} 
                  changeHighlighted ={(foundId) => this.setState({...this.state, highlightedItemId: foundId})}
                  data={this.state.data} />
              <ButtonSvgComponents 
                  disabled={this.state.data && !this.state.data.length}
                  name='delete' 
                  callback={() => this.setState({...this.state, isPopup: !this.state.isPopup})}/>
            </div>
            {load}
            <PopupComponent
                data={this.state.data} 
                isPopup={this.state.isPopup}
                fetchData={() => this.fetchData()} 
                changeStatePopup={() => this.setState({...this.state, isPopup: !this.state.isPopup})}/>  
          </div>
        </div>
      </div>
    )
  }
}


export default App;
