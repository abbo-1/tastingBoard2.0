import { createStore } from 'redux';

const initialState = {
    drinkChoice: "all"
}

const store = createStore((state = initialState, action) => { 
            console.log("Action:", action)
        if (action.type === "CHANGE_DRINKS" ) {

            return { ...state, drinkChoice : action.drinkChoice };

    } else {
        return state;
    }
});

export default store;