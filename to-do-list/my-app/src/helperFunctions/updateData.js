export function addElementToDataFun (setData, data, value, rank) {
    setData([...data, {value: value, complete: false, rank: rank}])
}

export function moveElToCompletedFun(changeTargetData , targetData, changeInitialData, initialData, index, elem, rank, complite) {
    changeTargetData([...targetData, {value: elem, complete: complite, rank: rank}])
    changeInitialData([...initialData.slice(0, index), ...initialData.slice(index + 1, initialData.length)])
}

export function editElementFun (changeTargetData, initialData, index, value, rank, complite) {
    changeTargetData([...initialData.slice(0, index), {value: value, complete: complite, rank: rank}, ...initialData.slice(index + 1, initialData.length)])
}

export function deleteElementFun (changeTargetData, initialData, index) {
    changeTargetData([...initialData.slice(0, index), ...initialData.slice(index + 1, initialData.length)])
}

export function deleteAllItemsFun (setData, setMadeData) {
    setData([])
    setMadeData([])
}