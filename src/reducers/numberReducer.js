

const intialNumValue = []

const numberReducer = (state = intialNumValue, action) => {
    switch (action.type) {
        case 'ADD_NUMBER': {
            return [...state, action.payload]
        }
        case 'PLUS_TWO': {
            return state.map((ele) => {
                return {
                    id: ele.id,
                    value: ele.value + 2
                }
            })
        }
        case 'CLEAR': {
            return []
        }

        case 'INCREMENT': {
            return state.map((ele) => {
                if (ele.id === action.payload) {
                    return { ...ele, value: ele.value + 1 }
                } else {
                    return { ...ele }
                }
            })
        }
        case 'DECREMENT': {
            return state.map((ele) => {
                if (ele.id === action.payload) {
                    return { ...ele, value: ele.value - 1 }
                } else {
                    return { ...ele }
                }
            })
        }

        case 'REMOVE_ITEM': {
            return state.filter((ele) => {
                return ele.id !== action.payload
            })
        }

        default: {
            return [...state]
        }
    }
}

export default numberReducer