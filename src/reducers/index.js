import {ADD} from '../actions'
import {combineReducers} from 'redux'

const initState = {
    str: 'react',
};

const data = (state = initState, action) => {
    switch (action.type) {
        case ADD:
            return {
                str: state.str + '200'
            };
        default:
            return state;
    }
};

const App = combineReducers({
    data
});

console.log(data);
console.log(App);

export default App;