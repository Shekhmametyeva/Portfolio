import {render, screen, fireEvent} from '@testing-library/react';
import ToDoListComponent from './ToDoListComponent';

describe('тестируем ToDoListComponent', () => {
    const data = [
        {value: '5', complete: false, rank: 'Личные'}, 
        {value: 'Alina', complete: false, rank: 'Личные'}, 
        {value: '3', complete: false, rank: 'Семья'},
        {value: 'Family', complete: false, rank: 'Семья'},
        {value: '15', complete: false, rank: 'Семья'},
        {value: '9', complete: false, rank: 'Работа'},
        {value: 'work', complete: false, rank: 'Работа'},
        {value: 'Shopping', complete: false, rank: 'Покупки'},
        {value: '0', complete: false, rank: 'Покупки'},
        {value: '55', complete: false, rank: 'Учеба'},
        {value: 'Learning', complete: false, rank: 'Учеба'},
    ];
    test('render ToDoListComponent', () => {
        render(<ToDoListComponent dataShow={data} data={data}/>);
        const itemsArr = screen.getAllByTestId('todo-item');
        expect(itemsArr.length).toBe(data.length);
        itemsArr.forEach(el => expect(el).toBeInTheDocument());        
    })
})