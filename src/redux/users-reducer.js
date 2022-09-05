import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    totalCount: 80,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, totalCount: action.count
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.page
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.bool
            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state, isFollowingInProgress: action.bool
                    ? [...state.isFollowingInProgress, action.bool]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }

}

export const followAC = (userId) => ({type: 'FOLLOW', id: userId});
export const unfollowAC = (userId) => ({type: 'UNFOLLOW', id: userId});
export const setUsersAC = (users) => ({type: 'SET-USERS', users});
export const setTotalCountAC = (count) => ({type: 'SET-TOTAL-COUNT', count});
export const setCurrentPageAC = (page) => ({type: 'SET-CURRENT-PAGE', page});
export const toggleIsFetching = (bool) => ({type: 'TOGGLE_IS_FETCHING', bool});
export const toggleIsFollowingInProgress = (bool, userId) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, bool, userId});

export const getUsersThunkCreator = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        userAPI.getUsers(pageSize, currentPage).then(data => {
            dispatch(toggleIsFetching(false));
            //dispatch(setTotalCountAC(data.totalCount));
            dispatch(setUsersAC(data.items));
        })
    }
};
export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userId));
        userAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(userId));
            }
            dispatch(toggleIsFollowingInProgress(false, userId));
        })
    }
};

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userId));
        userAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followAC(userId));
            }
            dispatch(toggleIsFollowingInProgress(false, userId));
        })
    }
}


export default usersReducer;