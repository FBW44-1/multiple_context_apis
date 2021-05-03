import CompC from './CompC';
import CompD from './CompD';



function CompB() {
    return (
        <div>
            <h3>Component - B </h3>
            <hr/>
            <h1>With Context Consumer</h1>
            <CompC />
            <hr/>
            <h1>With useContext</h1>
            <CompD />
        </div>
    )
}

export default CompB
