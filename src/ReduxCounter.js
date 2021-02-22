import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ReduxCounter() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)
return (
    <div>
        <h1>Redux Counter</h1>
        <p>Count: {count}</p>
        <button onClick={()=>dispatch({type: 'INCREMENT'})}>Increment</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
    </div>
)
}