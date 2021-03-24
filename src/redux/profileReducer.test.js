import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profileReducer";

let state = {
    posts: [
        {id: 1, post: 'Hi, how are you?', likesCount: 12},
         {id: 2, post: "It's my first post", likesCount: 10},
        {id: 3, post: "Abracadabra", likesCount: 6},
        {id: 4, post: "Ooooooops", likesCount: 5},
        {id: 5, post: "Don't hurt me", likesCount: 102}
    ]
};

test('length of posts should be incremented', () => {
    //1. Test data
    let action = addPostActionCreator("It is test!!!");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectations
   expect( newState.posts.length).toBe(6);
});

test('message of new post should be correct', () => {
    //1. Test data
    let action = addPostActionCreator("It is test!!!");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectations
    expect( newState.posts[5].post).toBe("It is test!!!");
});

test('after deleting length of messages should be decrement', () => {
    //1. Test data
    let action = deletePostActionCreator(1);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectations
    expect( newState.posts.length).toBe(4);
});

    test(`after deleting length of messages shouldn't be changed, if id is incorrect`, () => {
    //1. Test data
    let action = deletePostActionCreator(1000);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectations
    expect( newState.posts.length).toBe(5);
});