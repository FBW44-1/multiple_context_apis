
import { UserContext, CounterContext } from '../App';

function CompC() {
    return (
        <div>
            <h3>Component - C </h3>    
            <UserContext.Consumer>
                {
                    user => {
                        // console.log(user);
                        const { name, city, userChangeHandler } = user;

                        return (
                            <CounterContext.Consumer>
                                {
                                    counter => {
                                        // console.log(counter);
                                        const { count, increment, decrement, reset } = counter;

                                        return (
                                            <div>
                                                <p>Hello <b>{name}</b> from <i>{city}</i></p>
                                                <input type="text" onChange={userChangeHandler('name')} placeholder="Name"/>
                                                <input type="text" onChange={userChangeHandler('city')} placeholder="City"/>
                                                <p>Count : <b>{count}</b></p>
                                                <button onClick={increment}>Increment</button>
                                                <button onClick={decrement}>Decrement</button>
                                                <button onClick={reset}>Reset</button>
                                            </div>
                                        )
                                
                                    }
                                }
                            </CounterContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default CompC
