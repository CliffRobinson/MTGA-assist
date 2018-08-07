import { ADD_W, ADD_U, ADD_B, ADD_R, ADD_G, SUB_W, SUB_U, SUB_B, SUB_R, SUB_G, CLEAR} from '../actions/mana'

function u(state=0, action){
    switch (action.type){
        case ADD_U:
            return state+1;
        case SUB_U:
            if (state != 0) {
                return state-1;
            }
        default:
            return state;
    }
}

export default u;