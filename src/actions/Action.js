import { TYPES } from '../types/Types'

const actions = {
    changePlayerName: (playerName) => {
        console.log("~~changePlayerName~~")
        console.log(playerName)
        return (dispatch, getState) => {
            dispatch({
                type: TYPES.CHANGE_PLAYER_NAME,
                player_name: playerName
            })
        }
    }
}

export default actions