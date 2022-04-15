import { TYPES } from '../types/Types'

const initState = {
    playerName: "Victor",
};

export default function reducer(state = initState, action) {
    console.log("REDUCER")
    switch (action.type) {
        case TYPES.CHANGE_PLAYER_NAME:
            console.log('[Reducers] Change Player Name success');
            return { ...state, playerName: action.player_name };
        default:
            return state
    }
}