import './ShoppingListComponent.css';
import React from 'react';
import ShoppingItemComponent from '../shoppingItemComponent/ShoppingItemComponent';

class ShoppingListComponent extends React.Component {
    
    render() {
        if(!this.props.data.length) {
            return(
                <h1 className='shopping__empty'>Список пуст</h1>
            )
        }
        return (
            <div className='shopping__list'>
                {this.props.data.map(el => <ShoppingItemComponent element={el} key={el.id} callback={this.props.callback}/>)}
            </div>
        )
    }
}

export default ShoppingListComponent