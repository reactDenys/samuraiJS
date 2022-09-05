const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    dialogs: [
        {name: 'Denys', id: 1, avatar: "https://i.ytimg.com/vi/dXzuxH2SgVU/hqdefault.jpg"},
        {
            name: 'Vova',
            id: 2,
            avatar: "https://3.bp.blogspot.com/-SfgALHfQD8M/WqAtaGLphtI/AAAAAAAA6qg/VHZA_ecFI1svWQqmIQFVcEH79eJpwSHZwCLcBGAs/s1600/1.jpg"
        },
        {
            name: 'Sasha',
            id: 3,
            avatar: "https://cdn.vox-cdn.com/thumbor/QVm-ToBblIN-7hRUiueFriDHIpA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23144939/zeri_splash.jpg"
        },
        {
            name: 'Siri',
            id: 4,
            avatar: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbf6c70d9272a5a2a/5db05fcfe9d7526ab429e532/RiotX_ChampionList_jhin.jpg?quality=90&width=250"
        }
    ],
    messages: [
        {message: 'Hi', id: 1},
        {message: 'How are you?', id: 2},
        {message: 'I like React!', id: 3}
    ],
    newMessage: ''
};

let dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                message: state.newMessage,
                id: 4
            };
            let stateCopy = {
                ...state,
                messages: [...state.messages, newMessage]
            };
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.newMessage = action.newMessage;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'});
export const updateNewMessageCreator = (message) => ({type: 'UPDATE-NEW-MESSAGE', newMessage: message});

export default dialogReducer;