import { useSelector } from 'react-redux';
import './App.css';

const ComponentC = () => {

    const cursos = useSelector(
        state => state.courses.courses,
        []
    )

    return (
        <div className="item">
            <h1>Componente C</h1>
            <hr />
            <br />
            { cursos.map((curso, i) => <li key={i}>{curso}</li>)}

        </div >
    )
}

export default ComponentC
