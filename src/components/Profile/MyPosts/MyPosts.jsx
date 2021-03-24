import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {AddPostForm} from "./AddNewPostForm";
import Preloader from "../../common/Preloader/Preloader";


const MyPosts = React.memo(props => {


    if (props.profile === null) {
        return <div><Preloader/></div>
    }  else if (props.profile !== null) {

        let postsElements = props.posts.map(p => <Post message={p.post}
                                                       name={props.profile.fullName}
                                                       photo={props.profile.photos}
                                                       likesCount={p.likesCount}
                                                       key={p.id}/>);
        let newPostElement = React.createRef();

        const onAddPost = (values) => {
            props.addPost(values.newPostText);
        };

        let likesCount = (arr) => {
            let likes = [];
            for(let i = 0; i < arr.length; i++){
                likes.push(arr[i].likesCount);
            }
            return likes.reduce((previousValue, currentValue, index, array) => {
                return previousValue + currentValue;
            })
        };

        return (
        <div className={s.myPosts_wrapper}>
            <div className={s.myPosts_blockWithForm}>
                <AddPostForm onSubmit={onAddPost}/>
            </div>
            <div className={s.myPosts_blockWithCounter}>
                <div className={s.myPosts_blockWithCounter_posts}>
                    <div>Posts</div>
                    <div>{props.posts.length}</div>
                </div>
                <div className={s.myPosts_blockWithCounter_likes}>
                    <div>Likes</div>
                    <div>{likesCount(props.posts)}</div>
                </div>
            </div>
            <div className={s.myPosts_blockWithPosts}>
                {postsElements}
            </div>
        </div>
    )}

});

export default MyPosts;