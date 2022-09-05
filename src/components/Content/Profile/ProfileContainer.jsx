import React from "react";
import Profile from "./Profile";
//import {userAPI} from "../../../api/api";

class ProfileInfoContainer extends React.Component {
    componentDidMount() {
        /*userAPI.getProfile(this.props.userId).then(data => {
                this.props.setUserProfile(data)
            })*/
        this.props.setProfileThunkCreator(this.props.userId);
    }

    render() {
        return <Profile profile={this.props.profile} />
    }
}


export default ProfileInfoContainer