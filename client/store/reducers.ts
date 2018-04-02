import { combineReducers } from 'redux'

function login (state, action) {
    switch (action.type) {
        case 'SET_USER_NAME':
            return action.name
    }
}
const Reducer = combineReducers({
    login
})

export default Reducer