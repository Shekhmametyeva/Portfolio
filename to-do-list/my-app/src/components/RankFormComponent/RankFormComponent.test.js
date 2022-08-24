import {render, screen} from '@testing-library/react';
import RankFormComponent from './RankFormComponent';

describe('тестируем FormComponent', () => {
    const ranksList = ['Личные', 'Семья', 'Работа', 'Покупки', 'Учеба'];
    test('render RankFormComponent', () => {
        render(<RankFormComponent ranksList={ranksList} />);
        const btns = screen.getAllByRole('button');
        expect(btns.length).toBe(ranksList.length);
        expect(btns).toMatchSnapshot()
    });
    test('render RankFormComponent c классом active', () => {
        render(<RankFormComponent ranksList={ranksList} activeRank='Семья'/>);
        const btnRank = screen.getAllByTestId('rank-button');
        expect(btnRank[1]).toHaveClass('active')
    });
})