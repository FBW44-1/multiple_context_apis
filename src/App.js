
import React, { useState, createContext } from 'react';
import './App.css';
import CompA from './components/CompA';


// 1. step : to create context
export const UserContext = createContext();
export const CounterContext = createContext();



function App() {

    const [name, setName] = useState('John')
    const [city, setCity] = useState('Berlin')
    const [count, setCount] = useState(0)


    const userChangeHandler = arg => e => {
        // console.log(arg)
        // console.log(e.target.value)
        arg === 'name' ? setName(e.target.value || 'John') : setCity(e.target.value || 'Berlin')
    }
    
    const increment = () => {
        setCount( prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount( prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <UserContext.Provider value={{name, city, userChangeHandler}}>
            <CounterContext.Provider value={{count,  increment, decrement, reset}}>
                <div className="App">
                    <CompA />
                </div>
            </CounterContext.Provider>
        </UserContext.Provider>
    );
}

export default App;
