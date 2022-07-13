import React from 'react'

const Home = (props) => {
    console.log(props.data.length);

    return <>
        <h1>Home{props.data.length}</h1>
        <button onClick={() => props.addToCartHandler({ name: 'subhan', age: '10' })}>click me</button>
        <button onClick={() => props.removeToCartHandler({ name: 'subhan', age: '10' })}>dexrease me</button>
    </>
}

export default Home;