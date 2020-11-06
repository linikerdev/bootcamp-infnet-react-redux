const { createStore, combineReducers } = require("redux");


// ESTADO INICIAL 
const INITIAL_STATE = {
    courses: [
        "NodeJs",
        "Python",
        "React"
    ]
}

// REDUCER 
export function courses(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_COURSE":
            console.log('adicionando curso')
            state.courses.push(action.title)
            return state
        default:
            return state
    }

}




// store

const store = createStore(
    combineReducers({
        courses
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store;




/*

    1 - Criando e exportando a store
    2 - Registrar o provider
    3 - combinei os reducers
    4 - Registrei ao menos 1 reducer
    5 - toda action deve conter um type 
    6 - sempre a action deve retornar o state(estado)

*/