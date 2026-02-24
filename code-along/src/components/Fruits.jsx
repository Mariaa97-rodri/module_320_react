// import { useState } from 'react'
function Fruits () {
const fruits = ["Apple", "Banana","Cherry","Durian","Elderberry"]

const emptyList = fruits.length === 0 ? <p>No Fruits Available</p> : null

    return (
        <div>
            <h1>Fruits</h1>
            {emptyList}
            <ul>
                {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
            </ul>
        </div>
    )
}

export default Fruits