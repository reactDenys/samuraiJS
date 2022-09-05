import React from "react";
import s from './Users.module.css';
import userLogo from '../../../assets/img/user.png'
import {NavLink} from "react-router-dom";


const Users = (props) => {
    return (
        <div>
            <h2>Users</h2>
            <div className={s.pagesBar}>
                {
                    props.pages.map(p => (
                        <span key={p.id} onClick={() => {
                            props.usersPagination(p)
                        }}
                              className={p === props.currentPage ? s.selectedPage : ""}>{p}</span>
                    ))
                }
            </div>
            {
                props.users.map(user => (
                        <div key={user.id} className={s.user}>
                            <div className={s.userProfile}>
                                <div>
                                    <NavLink to={"/profile/" + user.id}>
                                        <img className={s.userAva}
                                             src={user.photos.small !== null ? user.photos.small : userLogo} alt=""/>
                                    </NavLink>
                                </div>
                                <div>
                                    {user.followed ?
                                        <button disabled={props.isFollowingInProgress.some(id => id === user.id)}
                                                onClick={() => {
                                                    props.unfollow(user.id)
                                                    /*props.isFollowingInProgress(true, user.id);
                                                    userAPI.unfollow(user.id).then(data => {
                                                        if (data.resultCode === 0){
                                                            props.unfollow(user.id);
                                                        }
                                                        props.isFollowingInProgress(false, user.id);
                                                    })*/
                                                }
                                                }>Unfollow</button> :
                                        <button disabled={props.isFollowingInProgress.some(id => id === user.id)}
                                                onClick={() => {
                                                    props.follow(user.id)
                                                    /*props.isFollowingInProgress(true, user.id);
                                                    userAPI.follow(user.id).then(data => {
                                                        if (data.resultCode === 0) {
                                                            props.follow(user.id);
                                                        }
                                                        props.isFollowingInProgress(false, user.id);
                                                    })*/
                                                }}>Follow</button>}
                                </div>
                            </div>

                            <div className={s.userInfo}>
                                <div className={s.userContent}>
                                    <div><h3>{user.name}</h3></div>
                                    <div className={s.userStatus}><span>Status:</span> {user.status}</div>
                                </div>
                                <div className={s.userLocation}>
                                    {'user.location.city'}, {'user.location.country'}
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </div>)
}

export default Users;