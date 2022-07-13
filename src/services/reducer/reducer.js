import { ADD_TO_CART, REMOVE_TO_CART } from "../../services/constant";
const initialState = {
    cardData: [],
}
export default function cardItems(state = [], action) {
    console.log('cardData,state', state);
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                { cardData: action.data }
            ]

            break;
        case REMOVE_TO_CART:
            state.pop()
            return [
                ...state,
            ]

            break;
        default: return state
    }
}