import {sendMessageCreator, updateNewMessageCreator} from "../../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
//import {withRedirectToLogin} from "../../../redirect/redirectToLogin";
//import {compose} from "redux";

/*
const DialogsContainer = (props) => {
    return <StoreContext.Consumer>
        {
            store => {
                let sendMessage = () => {
                    store.dispatch(sendMessageCreator());
                    store.dispatch(updateNewMessageCreator(''));
                };

                const onMessageChange = (message) => {
                    store.dispatch(updateNewMessageCreator(message));
                };
                return <Dialogs sendMessage={sendMessage} updateNewMessage={onMessageChange}
                                data={store.getState().dialogsPage}/>
            }
        }
    </StoreContext.Consumer>
}
*/


const mapStateToProps = (state) => {
    return {
        data: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
            dispatch(updateNewMessageCreator(''));
        },
        updateNewMessage: (message) => {
            dispatch(updateNewMessageCreator(message));
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer

/*

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRedirectToLogin
)(Dialogs);*/
