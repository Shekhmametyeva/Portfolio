import './ShoppingListComponent.css';
import React from 'react';
import ShoppingItemComponent from '../shoppingItemComponent/ShoppingItemComponent';

class ShoppingListComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        if(!this.props.data.length) {
            return(
                <h1>Список пуст</h1>
            )
        }
        return (
            <div className='shopping__list'>
                {this.props.data.map(el => <ShoppingItemComponent element={el} key={el}/>)
                }
            </div>
        )
    }
}

export default ShoppingListComponent