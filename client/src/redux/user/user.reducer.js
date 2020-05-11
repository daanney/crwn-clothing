import UserActionTypes from "./user.types"

const INITIAL_STATE = {
	currentUser: null,
	error: null
}

const userReducer =(state = INITIAL_STATE, action)=> {
	switch(action.type) {
		case UserActionTypes.SIGN_IN_SUCCESS: 
			return { ...state, currentUser: action.payload, error: INITIAL_STATE.error }

		case UserActionTypes.SIGN_OUT_SUCCESS:
			return { ...state, currentUser: INITIAL_STATE.currentUser, error: INITIAL_STATE.error}

		case UserActionTypes.SIGN_IN_FAILURE:
		case UserActionTypes.SIGN_OUT_FAILURE:
		case UserActionTypes.SIGN_UP_FAILURE:
			return { ...state, error: action.payload}
			
		default: 
			return state
	}
}

export default userReducer