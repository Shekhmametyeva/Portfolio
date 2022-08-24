import {render, screen, fireEvent} from '@testing-library/react';
import ToDoItemComponent from './ToDoItemComponent';

describe('тестируем ToDoItemComponent', () => {
    test('render ToDoItemComponent', () => {
        render(<ToDoItemComponent element={{complete: false, rank: "Личные", value: "Alina"}} highlighted={false}/>);
        const item = screen.getByTestId('todo-item');
        expect(item).toBeInTheDocument(); 
        expect(item).toMatchSnapshot()
        const title = screen.getByText(/Alina/i);
        expect(title).toBeInTheDocument(); 
        const btns = screen.getAllByRole('button');
        expect(btns.length).toBe(4);
        
    })
    test('render ToDoItemComponent без классов', () => {
        render(<ToDoItemComponent element={{complete: false, rank: "Личные", value: "Alina"}} highlighted={false}/>);
        const item = screen.getByTestId('todo-item')
        expect(item).not.toHaveClass('highlighted', 'done');
    })
    test('render ToDoItemComponent с классом done', () => {
        render(<ToDoItemComponent element={{complete: true, rank: "Личные", value: "Alina"}} highlighted={false}/>);
        const item = screen.getByTestId('todo-item')
        expect(item).not.toHaveClass('highlighted');
        expect(item).toHaveClass('done');
    })
    test('render ToDoItemComponent с классом highlighted', () => {
        render(<ToDoItemComponent element={{complete: false, rank: "Личные", value: "Alina"}} highlighted={true}/>);
        const item = screen.getByTestId('todo-item')
        expect(item).not.toHaveClass('done');
        expect(item).toHaveClass('highlighted');
    })
    test('render ToDoItemComponent с классом done u highlighted', () => {
        render(<ToDoItemComponent element={{complete: true, rank: "Личные", value: "Alina"}} highlighted={true}/>);
        const item = screen.getByTestId('todo-item');
        expect(item).toHaveClass('highlighted', 'done');
    })
    test('при пропсе inputItemOpen появляется инпут', () => {
        render(<ToDoItemComponent element={{complete: true, rank: "Личные", value: "Alina"}} highlighted={true} inputItemOpen={true}/>);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    })
})