import {userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
    posts: [
        {
            message: 'Hi, how are you?',
            id: 1,
            likes: 23,
            ava: 'data:image/jpeg;base64,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'
        },
        {
            message: 'It\'s great!',
            id: 2,
            likes: 13,
            ava: 'https://lastfm.freetls.fastly.net/i/u/ar0/b06eb05ac661860f9f336489de3d9102'
        }
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.newPostText,
                id: 3,
                likes: 0,
                ava: 'https://lastfm.freetls.fastly.net/i/u/ar0/b06eb05ac661860f9f336489de3d9102'
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            return stateCopy;
        }
        case UPDATE_NEW_POST: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USERS_PROFILE: {
            return {
                ...state, profile: action.userId
            }
        }
        default:
            return state;
    }

}

export const addPostCreator = () => ({type: 'ADD-POST'});
export const updatePostCreator = (text) => ({type: 'UPDATE-NEW-POST', newText: text});
export const setUserProfileAC = (userId) => ({type: 'SET_USERS_PROFILE', userId});

export const setProfileThunkCreator = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId).then(data => {
            dispatch(setUserProfileAC(data))
        })
    }
}

export default profileReducer;