import { useContext } from 'react'
import { UserContext, CounterContext } from '../App';


function CompD() {

    const user = useContext(UserContext)
    const counter = useContext(CounterContext)

    // console.log(user);
    const { name, city, userChangeHandler } = user;

    //console.log(counter);
    const { count, increment, decrement, reset } = counter;
    

    return (
        <div>
            <h3>Component - D </h3>
            
            <div>
                <p>Hello <b>{name}</b> from <i>{city}</i></p>
                <input type="text" onChange={userChangeHandler('name')} placeholder="Name"/>
                <input type="text" onChange={userChangeHandler('city')} placeholder="City"/>
                <p>Count : <b>{count}</b></p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default CompD
