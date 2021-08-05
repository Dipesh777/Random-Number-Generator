import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { addNumber, plusTwo, clearList } from '../../actions/numberActions'


const NumbersControl = (props) => {

    const dispatch = useDispatch()

    // random number generator
    const generateNumber = () => {
        const randomNumber = Math.round(Math.random() * 100)
        const num = {
            id: uuidv4(),
            value: randomNumber
        }
        dispatch(addNumber(num))
    }

    // removing all functionality
    const removeAllNum = () => {
        dispatch(clearList())
    }

    // adding plus two functionality
    const addTwo = () => {
        dispatch(plusTwo())
    }

    return (
        <div>
            <button className='me-3' onClick={generateNumber}>Generate</button>
            <button className='me-3' onClick={addTwo} >+2</button>
            <button onClick={removeAllNum}>Remove All</button>
        </div>
    )
}

export default NumbersControl