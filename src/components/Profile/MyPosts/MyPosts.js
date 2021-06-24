import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const {item, postBlock} = classes

export const MyPosts = ({posts}) => {

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