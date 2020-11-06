import { useSelector } from 'react-redux';
import './App.css';

const ComponentB = () => {

    const cursos = useSelector(
        state => state.courses.courses,
        []
    )

    return (
        <div className="item">
            <h1>Componente B</h1>
            <hr />
            <br />
            { cursos.map((curso, i) => <li key={i}>{curso}</li>)}

        </div >
    )
}

export default ComponentB
