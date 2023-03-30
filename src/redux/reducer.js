import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET} from "./actions"


const inicialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state, myFavorites: [...state.allCharacters, action.payload],
                ...state, allCharacters: [...state.allCharacters, action.payload]
            };

        case REMOVE_FAV:
            return {
                ...state, myFavorites:
                    state.allCharacters.filter((char) => char.id !== action.payload),
                ...state, allCharacters: [...state.allCharacters, action.payload]
            };
        case RESET:
            return {
                ...state, myFavorites: [...state.allCharacters]
            };

        case FILTER:
            return {
                ...state, myFavorites:
                    state.allCharacters.filter((char) => char.gender === action.payload),
            }


        case ORDER:
            return {
                ...state, myFavorites:
                    state.allCharacters.sort((a, b) => {
                        if (a.id > b.id) {
                            return "Ascendente" === action.payload ? 1 : -1;
                        }
                        if (a.id < b.id) {
                            return "Descendente" === action.payload ? -1 : 1;
                        }
                        return 0;
                    })
            }



        default:
            return { ...state }
    }

}

export default rootReducer;