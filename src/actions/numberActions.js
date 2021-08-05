
export const addNumber = (radomNum) => {
    return {
        type: 'ADD_NUMBER',
        payload: radomNum
    }
}

export const plusTwo = () => {
    return {
        type: 'PLUS_TWO'
    }
}

export const clearList = () => {
    return {
        type: 'CLEAR'
    }
}

export const increment = (id) => {
    return {
        type: 'INCREMENT',
        payload: id

    }
}

export const decrement = (id) => {
    return {
        type: 'DECREMENT',
        payload: id

    }
}

export const removeItem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        payload: id
    }
}

