import {checkValidity, sortFunction, toggleSorting} from './helperFunctions';



describe('сортировка', () => {
    const arr = [
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
    const arrSort = [
        {value: '0', complete: false, rank: 'Покупки'},
        {value: '3', complete: false, rank: 'Семья'},
        {value: '5', complete: false, rank: 'Личные'}, 
        {value: '9', complete: false, rank: 'Работа'},
        {value: '15', complete: false, rank: 'Семья'},
        {value: '55', complete: false, rank: 'Учеба'},
        {value: 'Alina', complete: false, rank: 'Личные'}, 
        {value: 'Family', complete: false, rank: 'Семья'},
        {value: 'Learning', complete: false, rank: 'Учеба'},
        {value: 'Shopping', complete: false, rank: 'Покупки'},
        {value: 'work', complete: false, rank: 'Работа'},    
    ];

    test('отсортировать массив', () => {
        expect(sortFunction([...arr])).toEqual(arrSort)
    });
    test('все категории с сортировкой', () => {
        expect(toggleSorting('Все', true, arr)).toEqual(arrSort)
    });
    test('все категории без сортировки', () => {
        expect(toggleSorting('Все', false, arr)).toEqual(arr)
    });
    test('категория "Личные" с сортировкой', () => {
        const result = [
            {value: '5', complete: false, rank: 'Личные'}, 
            {value: 'Alina', complete: false, rank: 'Личные'},
        ]
        expect(toggleSorting('Личные', true, arr)).toEqual(result)
    });
    test('категория "Семья" без сортировкой', () => {
        const result = [
            {value: '3', complete: false, rank: 'Семья'},
            {value: 'Family', complete: false, rank: 'Семья'},
            {value: '15', complete: false, rank: 'Семья'},
        ]
        expect(toggleSorting('Семья', false, arr)).toEqual(result)
    });


})

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




