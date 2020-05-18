import UserActionTypes from "./user.types"

const INITIAL_STATE = {
	currentUser: null,
	sessionChecked: false,
	error: null
}

const userReducer =(state = INITIAL_STATE, action)=> {
	switch(action.type) {
		case UserActionTypes.SIGN_IN_SUCCESS: 
			return { ...state, currentUser: action.payload, error: INITIAL_STATE.error, sessionChecked: true }

		case UserActionTypes.SIGN_OUT_SUCCESS:
			return { ...state, currentUser: INITIAL_STATE.currentUser, error: INITIAL_STATE.error, sessionChecked: true }

		case UserActionTypes.SIGN_IN_FAILURE:
		case UserActionTypes.SIGN_OUT_FAILURE:
		case UserActionTypes.SIGN_UP_FAILURE:
			return { ...state, error: action.payload, sessionChecked: true }
			
		default: 
			return state
	}
}

export default userReducer