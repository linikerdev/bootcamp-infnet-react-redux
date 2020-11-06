import { useSelector } from 'react-redux';
import './App.css';

const ComponentA = () => {
    const courses = useSelector(
        state => state.courses.courses,
        []
    )
    return (
        <div className="item">
            <h1>Componente A</h1>
            <hr />
            <br />
            { courses.map((curso, i) => <li key={i}>{curso}</li>)}

        </div >
    )
}

export default ComponentA
