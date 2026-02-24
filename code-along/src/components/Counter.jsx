import { useState } from 'react'

function Counter () {
const [count, setCount] = useState(0);

function increment() {
    setCount((c) => c + 1)
}

function decrement() {
    setCount((c) => c - 1)
}

function reset() {
    setCount(0)
}
 return (<div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </div>)
}

export default Counter 