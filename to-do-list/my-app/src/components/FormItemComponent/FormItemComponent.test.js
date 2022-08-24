import {render, screen, fireEvent} from '@testing-library/react';
import FormItemComponent from './FormItemComponent';

describe('тестируем FormItemComponent', () => {
    test('render FormItemComponent', () => {
        render(<FormItemComponent />);
        const formItem = screen.getByTestId('form-item');
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument();
        expect(formItem).toMatchSnapshot()
    })
    test('при пустом вводе появляется "поле не заполнено"', () => {
        render(<FormItemComponent />);
        const input = screen.getByRole('textbox');
        const btn = screen.getByTestId('btn-edit-elem');
        fireEvent.input(input, {target: {value: ' '}});
        fireEvent.click(btn);
        expect(input).toBeInTheDocument();
        const errorText = screen.getByText(/поле не заполнено/i) 
        expect(errorText).toBeInTheDocument()
    })
})