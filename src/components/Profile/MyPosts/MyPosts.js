import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const {item, postBlock} = classes

export const MyPosts = () => {
    const posts = [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Not bad', likesCount: 5},
    ]
    const postsElements = posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    return (

        <div className={postBlock}>
            <div className={item}>
                <h3>My Post</h3>
                <div>
                    <textarea></textarea>
                </div>

                <button>Add</button>
            </div>
            {postsElements}
        </div>

    )
}