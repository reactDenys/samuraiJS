import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage);

        /*this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
                this.props.toggleIsFetching(false);
                //this.props.setTotalCount(data.totalCount);
                this.props.setUsers(data.items);
            })*/
    }

    usersPagination = (p) => {
        this.props.setCurrentPage(p);
        this.props.getUsersThunkCreator(this.props.pageSize, p);
        /*this.props.toggleIsFetching(true);
        //this.props.setCurrentPage(p);
        userAPI.getUsers(this.props.pageSize, p).then(data => {
                this.props.toggleIsFetching(false);
                //this.props.setTotalCount(data.totalCount);
                this.props.setUsers(data.items);
            })*/
    }

    render() {
        let pagesCount = this.props.totalCount / this.props.pageSize;
        let pages = [];

        for (let i = 1; i <= Math.ceil(pagesCount); i++) {
            pages.push(i);
        }

        return <>
            {/*{this.props.isFetching ? <Preloader/> : null}*/}
            <Users usersPagination={this.usersPagination}
                   currentPage={this.props.currentPage}
                   pages={pages}
                   users={this.props.users}
                   unfollow={this.props.unfollowThunkCreator}
                   follow={this.props.followThunkCreator}
                   isFollowingInProgress={this.props.isFollowingInProgress}/>
            {this.props.isFetching ? <Preloader/> : null}

        </>
    }
}

export default UsersAPIComponent;
