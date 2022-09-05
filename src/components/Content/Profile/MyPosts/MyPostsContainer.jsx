import {addPostCreator, updatePostCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*

const MyPostsContainer = (props) => {
    return <StoreContext.Consumer>
        {
            store => {
                let state = store.getState().profilePage;

                let addPost = () => {
                    store.dispatch(addPostCreator());
                    store.dispatch(updatePostCreator(""));
                }

                let updateNewPost = (text) => {
                    store.dispatch(updatePostCreator(text));
                }

                return (
                    <MyPosts addPost={addPost} onPostChange={updateNewPost} posts={state.posts}
                             newPostText={state.newPostText}/>)
            }
        }
    </StoreContext.Consumer>
};
*/

const mapStateToProps = (state) => {

    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            dispatch(updatePostCreator(text));
        },
        addPost: () => {
            dispatch(addPostCreator());
            dispatch(updatePostCreator(""));
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
