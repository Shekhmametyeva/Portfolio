import {render, screen, fireEvent} from '@testing-library/react';
import FormComponent from './FormComponent';

describe('тестируем FormComponent', () => {
    const ranksList = ['Личные', 'Семья', 'Работа', 'Покупки', 'Учеба'];
    test('render FormComponent', () => {
        render(<FormComponent ranksList={ranksList} />);
        const form = screen.getByTestId('form');
        const input = screen.getByPlaceholderText(/Что добавим в список?/i);
        expect(input).toBeInTheDocument();
        expect(form).toMatchSnapshot()
    })
    test('при пустом вводе плейсхолдер исчезает, появляется "поле не заполнено"', () => {
        render(<FormComponent ranksList={ranksList} />);
        const input = screen.getByPlaceholderText('Что добавим в список?');
        const btn = screen.getByTestId('btn-add-elem');
        fireEvent.input(input, {target: {value: ' '}});
        fireEvent.click(btn);
        expect(screen.getByText(/поле не заполнено/i)).toBeInTheDocument();
        expect(screen.queryByPlaceholderText('Что добавим в список?')).toBeNull()
    })
    test('инпут находится в фокусе при открытии и после отправки', () => {
        render(<FormComponent ranksList={ranksList} />);
        const input = screen.getByRole('textbox');
        expect(input).toHaveFocus()
        const btn = screen.getByTestId('btn-add-elem');
        fireEvent.click(btn);
        expect(screen.getByRole('textbox')).toHaveFocus()
    })
    test('инпут находится в фокусе после выбора категории', () => {
        render(<FormComponent ranksList={ranksList} />);
        const input = screen.getByRole('textbox');
        const rank = screen.getAllByRole('button');
        fireEvent.click(rank[4]);
        expect(input).toHaveFocus();
    })
    
})