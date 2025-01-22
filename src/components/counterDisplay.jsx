import React from 'react'
import { useSelector } from 'react-redux'
import Incrementbutton from './Incrementbutton'
import Decrementbutton from './Decrementbutton'

const Counterdisplay = () => {
    const count = useSelector((state) => state.count)

    return (
        <>
            <h1>{count}</h1>
            <Incrementbutton />
            <Decrementbutton />
        </>
    )
}

export default Counterdisplay
