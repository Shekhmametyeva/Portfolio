import {render, screen} from '@testing-library/react';
import App from './App';

describe('тестируем АРР компонент', () => {
    test('компонент рендерится', () => {
        render(<App />);
        const title = screen.getByText(/to-do/i);
        expect(title).toBeInTheDocument(); 
    });
    test('в рендере нет лишних элементов', () => {
        render(<App />);
        const active = screen.queryByText('Активные');
        const complit = screen.queryByText('Завершенные');
        const sort = screen.queryByTestId('sortComponent')
        expect(active).toBeNull();
        expect(complit).toBeNull(); 
        expect(sort).toBeNull(); 
    });
    
})
