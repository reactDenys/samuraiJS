import React from "react";
import Header from "./Header";
import {isAuthThunkCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";
//import {userAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        /*userAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {login, email, id} = data.data;
                this.props.setAuthUserData(id, login, email);
            }
        })*/
        this.props.isAuthThunkCreator();

    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        /*setAuthUserData: (userId, login, email) => {
            dispatch(setAuthUserData(userId, login, email))
        },*/
        isAuthThunkCreator: () => {
            dispatch(isAuthThunkCreator())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);