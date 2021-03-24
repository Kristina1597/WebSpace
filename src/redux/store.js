import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you?', likesCount: 12},
                {id: 2, post: "It's my first post", likesCount: 10},
                {id: 3, post: "Abracadabra", likesCount: 6},
                {id: 4, post: "Ooooooops", likesCount: 5},
                {id: 5, post: "Don't hurt me", likesCount: 102}
            ],
            newPostText: "Yyyyt'"
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1, name: 'Georgy', messages:
                        {
                            messagesToMe: ["Lorem ipsum dolor sit amet", "Sed ut perspiciatis", "Duis aute irure dolor in reprehenderit"],
                            messagesFromMe: ["Sed ut perspiciatis", "Ut enim ad minima veniam,", "sed quia consequuntur magni dolores"]
                        }
                },
                {id: 2, name: 'Masha', messages:
                        {
                            messagesToMe: ["Sed ut perspiciatis", "Sed ut perspiciatis"],
                            messagesFromMe: ["Ut enim ad minima veniam"]
                        }},
                {id: 3, name: 'Anna', messages:
                        {
                            messagesToMe: ["Duis aute irure dolor in reprehenderit", "sed quia consequuntur magni dolores", "vel illum qui dolorem eum fugiat", "nisi ut aliquid ex ea commodi consequatur?"],
                            messagesFromMe: ["Ut enim ad minima veniam", "Duis aute irure dolor in reprehenderit"]
                        }},
                {id: 4, name: 'John', messages:
                        {
                            messagesToMe: ["Ut enim ad minima veniam", "Sed ut perspiciatis", "adipisci velit"],
                            messagesFromMe: ["nisi ut aliquid ex ea commodi consequatur?", "Lorem ipsum dolor sit amet", "quis nostrum exercitationem ullam corporis", "Nemo enim ipsam"]
                        }},
                {id: 5, name: 'Steve', messages:
                        {
                            messagesToMe: ["Sed ut perspiciatis", "Lorem ipsum dolor sit amet"],
                            messagesFromMe: ["Ut enim ad minima veniam"]
                        }},
                {id: 6, name: 'Jess', messages:
                        {
                            messagesToMe: ["Ut enim ad minima veniam", "Lorem ipsum dolor sit amet", "Sed ut perspiciatis"],
                            messagesFromMe: ["quis nostrum exercitationem ullam corporis", "Sed ut perspiciatis", "adipisci velit"]
                        }}
            ],
            newMessageText: "Hey, it's new message!"
        },
    },
    _callSubcriber() {
        alert('State was changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubcriber = observer;
    },

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         post: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubcriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubcriber(this._state);
    // },
    // addMessage(textMessage) {
    //     let newMessage = {
    //         id: 7,
    //         message: this._state.dialogsPage.newMessageText
    //     };
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubcriber(this._state);
    // },
    // updateNewMessageText(text) {
    //     this._state.dialogsPage.newMessageText = text;
    //     this._callSubcriber(this._state);
    // },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubcriber(this._state);
    },
};

export default store;
//  