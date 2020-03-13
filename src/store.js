import { createStore } from 'redux';

const initialState = {
    rate: 0,
    person: ""
}

const store = createStore((state = initialState, action) => { 
    switch (action.type) {

        case "CHANGE_DRINKS": 
            return { ...state, choice : action.choice };
            break;
        
        default:
            return state;
            break;
    }
});

export default store;

