import './ShoppingListComponent.css';
import React from 'react';
import ShoppingItemComponent from '../shoppingItemComponent/ShoppingItemComponent';

class ShoppingListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editedItemId: '',
        }
    }
    render() {
        if(!this.props.data.length && !this.props.load) {
            return(
                <h1 className='shopping__empty'>Список пуст</h1>
            )
        }
        return (
            <div className='shopping__list'>
                {this.props.data.map(el => <ShoppingItemComponent 
                    highlightedItemId={this.props.highlightedItemId}
                    changeHighlighted={this.props.changeHighlighted}
                    isInput={this.state.editedItemId === el.id}
                    onEditChange={(value) => this.setState({...this.state, editedItemId: value})} 
                    element={el} key={el.id}
                    fetchData={this.props.fetchData}
                    data={this.props.data}/>)}
            </div>
        )
    }
}

export default ShoppingListComponent