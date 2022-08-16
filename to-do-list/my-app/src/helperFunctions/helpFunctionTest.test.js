import {checkValidity, sortFunction} from './helperFunctions';

test('отсортировать массив', () => {
    const arr = [{value: '1'}, {value: '12'}, {value: '2'}, {value: 'Alina'}, {value: 'angel'}, {value: 'Milk'}, {value: '0'}];
    const strArrSort = [{value: '0'}, {value: '1'}, {value: '2'}, {value: '12'}, {value: 'Alina'}, {value: 'angel'}, {value: 'Milk'}];
    expect(sortFunction(arr)).toEqual(strArrSort)
});

describe('проверить валидацию ввода', () => {
    const dataFull = [{value: '1'}, {value: '12'}, {value: '2'}, {value: 'Alina'}, {value: 'angel'}, {value: 'Milk'}, {value: '0'}];
    test('пустой ввод (пробел)', () => {
        expect(checkValidity(dataFull, ' ')).toBe(null)
    });
    test('пустой ввод (таб)', () => {
        expect(checkValidity(dataFull, '    ')).toBe(null)
    });
    test('элемент из списка', () => {
        expect(checkValidity(dataFull, '12')).toBe('found')
    });
    test('элемент из списка', () => {
        expect(checkValidity(dataFull, 'Alina')).toBe('found')
    });
    test('элемент из списка c отступами', () => {
        expect(checkValidity(dataFull, '   Alina   ')).toBe('found')
    });
    test('элемент из списка c отступами', () => {
        expect(checkValidity(dataFull, '2 ')).toBe('found')
    });
    test('новое корректное значение', () => {
        expect(checkValidity(dataFull, '15')).toBe('15')
    });
    test('новое корректное значение', () => {
        expect(checkValidity(dataFull, 'Summer')).toBe('Summer')
    });
    test('новое значение c отступами', () => {
        expect(checkValidity(dataFull, ' Summer ')).toBe('Summer')
    });
    test('новое значение c отступами', () => {
        expect(checkValidity(dataFull, '    Summer  ')).toBe('Summer')
    });
})




