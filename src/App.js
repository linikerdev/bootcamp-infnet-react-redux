import { useDispatch } from 'react-redux';
import './App.css';


import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

function App() {

  const dispatch = useDispatch()


  const addCourse = () => {
    dispatch({
      type: "ADD_COURSE", title: 'Go Lang'
    })

  }

  return (
    <div className="App">
      <div className="box_dispatch">
        <button type="button" onClick={addCourse}>Disparar Evento</button>
      </div>

      <div className="Apps">
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>

    </div>
  );
}

export default App;
