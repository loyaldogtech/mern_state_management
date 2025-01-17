import React, { useContext } from 'react'
import { CounterContext } from './Context/CounterContext'

const Counter = () => {

    const counterContext = useContext(CounterContext)

    console.log(counterContext);

    return (
        <>
            <div>
                <button onClick={() => counterContext.setCount(counterContext.count + 1)}>Increment</button>
                <button onClick={() => counterContext.setCount(counterContext.count - 1)}>Decrement</button>
            </div>
        </>

    )
}

export default Counter