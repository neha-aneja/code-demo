import { Add_To_Cart } from "../constants"
import { Remove_From_Cart} from '../constants'

const initialState = {
    cardData:[]
}

const cardItems = (state=[], action) => {
console.log(action);
    switch(action.type) {
        case Add_To_Cart:
        return[
            ...state,
            {cardData: action.data}
        ]
        break;
        case Remove_From_Cart:
        state.pop();
        return[
            ...state,
        ]
        break;
        default:
            return state
    }
}

export default cardItems;