import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const {item, postBlock} = classes

export const MyPosts = () => {
    const postsData = [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Not bad', likesCount: 5},
    ]
    return (

        <div className={postBlock}>
            <div className={item}>
                <h3>My Post</h3>
                <div>
                    <textarea></textarea>
                </div>

                <button>Add</button>
            </div>
            <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
            <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
        </div>

    )
}