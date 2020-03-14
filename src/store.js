import { createStore } from 'redux';

const initialState = {
    drinkChoice: "all"
}

const store = createStore((state = initialState, action) => { 
            console.log("Action:", action)
    // switch (action.type) {
    
        // case "CHANGE_DRINKS": 

            return { ...state, 
                drinkChoice : action.drinkChoice };
        
        // default:
        //     return state;
    }
);

export default store;