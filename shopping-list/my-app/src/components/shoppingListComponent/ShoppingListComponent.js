import './ShoppingListComponent.css';
import React from 'react';
import ShoppingItemComponent from '../shoppingItemComponent/ShoppingItemComponent';

class ShoppingListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editedItemId: ''
        }
    }
    render() {
        if(!this.props.data.length) {
            return(
                <h1 className='shopping__empty'>Список пуст</h1>
            )
        }
        return (
            <div className='shopping__list'>
                {this.props.data.map(el => <ShoppingItemComponent 
                    isInput={this.state.editedItemId === el.id}
                    onEditChange={id => this.setState({...this.state, editedItemId: id})} 
                    element={el} key={el.id} 
                    callback={this.props.callback} 
                    value={this.props.value}/>)}
            </div>
        )
    }
}

export default ShoppingListComponent