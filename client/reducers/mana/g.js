import { ADD_G, SUB_G, CLEAR_MANA } from "../../actions/mana";

function g(state = 0, action) {
    switch (action.type) {
    case ADD_G:
        return state + 1;
    case SUB_G:
        if (state != 0) {
            return state - 1;
        }
        return 0;
    case CLEAR_MANA:
        return 0;
    default:
        return state;
    }
}

export default g;