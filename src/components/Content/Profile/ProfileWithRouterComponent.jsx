import React from "react";
import ProfileContainer from "./ProfileContainer";
import {connect} from "react-redux";
import {setProfileThunkCreator} from "../../../redux/profile-reducer";
import {useParams} from "react-router";
//import {withRedirectToLogin} from "../../../redirect/redirectToLogin";
//import {compose} from "redux";



const WithRouterComponent = (props) => {
    const params = useParams();

    return (
        <ProfileContainer
            {...props}
            userId={params.userId ? params.userId : '2'}
        />
    );
}




const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        /*setUserProfile: (userId) => {
            dispatch(setUserProfileAC(userId));
        }*/
        setProfileThunkCreator: (userId) => {
            dispatch(setProfileThunkCreator(userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithRouterComponent)

/*
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRedirectToLogin )(WithRouterComponent)*/
