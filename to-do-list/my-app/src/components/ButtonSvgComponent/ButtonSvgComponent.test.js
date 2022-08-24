import {render, screen} from '@testing-library/react';
import ButtonSvgComponent from './ButtonSvgComponent';

describe('тестируем ButtonSvgComponent', () => {
    test('render ButtonSvgComponent', () => {
        render(<ButtonSvgComponent name='add'/>);
        const btn = screen.getByRole('button');
        expect(btn).toBeInTheDocument();
        expect(btn).toMatchSnapshot();
    });
    test('render ButtonSvgComponent disabled', () => {
        render(<ButtonSvgComponent disabled={true} name='add'/>);
        const btn = screen.getByRole('button');
        expect(btn).toBeDisabled();
    });
    test('render ButtonSvgComponent active', () => {
        render(<ButtonSvgComponent disabled={false} name='menu'/>);
        const btn = screen.getByRole('button');
        expect(btn).toBeEnabled()
    });
    test('render ButtonSvgComponent with className', () => {
        render(<ButtonSvgComponent name='add' class='todo__button todo__done'/>);
        const btn = screen.getByRole('button');
        expect(btn).toHaveClass('todo__button todo__done');
    });
})