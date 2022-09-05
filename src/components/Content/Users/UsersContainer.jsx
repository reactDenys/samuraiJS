import {connect} from "react-redux";
import {
    /*followAC,*/ followThunkCreator, getUsersThunkCreator,
    setCurrentPageAC/*,
    setTotalCountAC,
    setUsersAC, toggleIsFetching*/, toggleIsFollowingInProgress,
    /*unfollowAC,*/ unfollowThunkCreator
} from "../../../redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        /*follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setTotalCount: (count) => {
            dispatch(setTotalCountAC(count));
        },*/
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        /*toggleIsFetching: (bool) => {
            dispatch(toggleIsFetching(bool));
        },*/
        isFollowingInProgress: (bool) => {
            dispatch(toggleIsFollowingInProgress(bool));
        },
        getUsersThunkCreator: (pageSize, currentPage) => {
            dispatch(getUsersThunkCreator(pageSize, currentPage));
        },
        unfollowThunkCreator: (userId) => {
            dispatch(unfollowThunkCreator(userId));
        },
        followThunkCreator: (userId) => {
            dispatch(followThunkCreator(userId));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);


export default UsersContainer;