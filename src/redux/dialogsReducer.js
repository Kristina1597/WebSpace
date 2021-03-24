const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is it going?'},
            {id: 3, message: 'Have you heard last news about weather?'},
        ],
        dialogs: [
            {id: 1, name: 'Darlene Robertson'},
        ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newText = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: newText}],};
        default:
            return state;
    }
};

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;