import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement ,removeItem} from '../../actions/numberActions'


const NumbersList = (props) => {

    const numbers = useSelector((state) => {
        return state.numbers
    })

    const dispatch = useDispatch()

    // handling increment plus button
    const handleIncrement = (id) => {
        dispatch(increment(id))
    }

    const handleDecrement = (id) => {
        dispatch(decrement(id))
    }

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id))
    }

    return (
        <div>
            <ul>
                {numbers.map((ele) => {
                    return <li key={ele.id} className='nav'>
                        {ele.value}
                        <button className='m-2' onClick={() => handleIncrement(ele.id)}>+</button>
                        <button className='m-2' onClick={() => handleDecrement(ele.id)}>-</button>
                        <button className='m-2' onClick={() => handleRemoveItem(ele.id)}>x</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default NumbersList