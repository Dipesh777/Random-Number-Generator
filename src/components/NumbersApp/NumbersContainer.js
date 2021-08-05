import React from 'react'
import { useSelector } from 'react-redux'
import NumbersList from './NumbersList'
import NumbersControl from './NumbersControl'
import AddNumber from './AddNumber'

const NumbersContainer = (props) => {

    //state variable
    const numbers = useSelector((state) => {
        return state.numbers
    })

    console.log(numbers)
    // sum functionlity
    const numSum = () => {
        let sum = 0
        numbers.forEach((ele) => {
            sum += ele.value
        })
        return sum
    }

    return (
        <div>
            <h2>Listing - {numbers.length} Sum  - {numSum()}</h2>
            <NumbersList />
            <NumbersControl />
            <AddNumber />
        </div>
    )
}

export default NumbersContainer