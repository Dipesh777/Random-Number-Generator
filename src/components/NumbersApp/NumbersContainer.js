import React from 'react'
import { useSelector } from 'react-redux'
import NumbersList from './NumbersList'
import NumbersControl from './NumbersControl'

const NumbersContainer = (props) => {
    const numbers = useSelector((state) => {
        return state.numbers
    })
    return (
        <div>
            <h2>Listing - {numbers.length} Sum  - ...</h2>
            <NumbersList />
            <NumbersControl />
        </div>
    )
}

export default NumbersContainer