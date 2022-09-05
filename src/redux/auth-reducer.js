import {userAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    login: null,
    userId: null,
    email: null,
    isAuth: false,
    initialized: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
            case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }

}

export const setAuthUserData = (userId, login, email) => ({type: 'ADD-POST', data: {userId, login, email}});
export const initializedSuccess = () => ({type: 'INITIALIZED_SUCCESS'});

export const isAuthThunkCreator = () => {
    return (dispatch) => {
        userAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {login, email, id} = data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        })
    }
}

export const isInitializedSuccess = () => dispatch => {
    let promise = dispatch(isAuthThunkCreator());

    promise.then(() => {
        dispatch(initializedSuccess())
    })
}

export default authReducer;