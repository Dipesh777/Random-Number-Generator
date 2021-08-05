import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { addNumber } from '../../actions/numberActions'

const AddNumber = (props) => {
    const dispatch = useDispatch()

    const [number, setNumber] = useState('')


    const handleChange = (event) => {
        const input = event.target.value
        setNumber(input)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const num = {
            id: uuidv4(),
            // value: parseFloat(addNumber) OR
            value: Number(number)

        }
        dispatch(addNumber(num))

        setNumber('')
    }

    return (
        <div>
            <form className='m-4' onSubmit={handleSubmit}>
                <input type="text" value={number} onChange={handleChange} />
            </form>
        </div>
    )
}

export default AddNumber