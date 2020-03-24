import { createStore } from 'redux';

const initialState = {
    drinkChoice: "all"
}


const store = createStore((state = initialState, action) => { 
            console.log("Action:", action)
        if (action.type === "CHANGE_DRINKS" ) {

            return { ...state, drinkChoice : action.drinkChoice };

        } 
        else if (action.type === "MANUFACTURER_CHANGE") {

            console.log("in reducer manufacturer") 
            return { ...state, manufacturer : action.value };
        
        }
        else if (action.type === "NAME_CHANGE"){

            console.log("in reducer name") 
            return { ...state, name : action.value };

        }
        else if (action.type ==="DRINKTYPE_CHANGE"){
            console.log("in reducer drink type selection")
            return { ...state, type : action.value };
        }
        else if(action.type === "RATING_CHANGE"){
            console.log("in reducer rating change")
            return { ...state, rating : action.value };
        }
        else if(action.type === "DESCRIPTION_CHANGE"){
            console.log("in reducer description")
            return { ...state, description : action.value };
        }
        else if(action.type === "DATE_CHANGE"){
            console.log("in reducer DATE")
            return { ...state, date : action.value };
        }
     else {
        return state;
    }
});


// const store = createStore((state = initialState, action) => { 
//     switch(action.type) {
//         case 'CHANGE_DRINKS':
//             return { ...state, drinkChoice : action.drinkChoice };
//             break;

//         case 'DISPLAY_CARDEDIT':
//             return { ...state, cardEdit : action.renderCardEdit } 
//             break;

//         default:
//             return state
//     }
// }
//             console.log("Action:", action)
//         if (action.type === "CHANGE_DRINKS" ) {

//             return { ...state, drinkChoice : action.drinkChoice };

//     } else {
//         return state;
//     }
// });

export default store;
