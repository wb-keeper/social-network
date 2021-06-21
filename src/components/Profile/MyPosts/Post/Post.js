import  classes from './Post.module.css'

const {item} = classes

const Post = ({message, likesCount}) => {
    return (
        <div className={item}>
            <img src='https://get.wallhere.com/photo/1600x1200-px-action-adventure-alien-aliens-Avatar-fantasy-fi-fighting-futuristic-sci-warrior-1635355.jpg' />
            {message}
            {likesCount}
            dislike
            <input value='5' />
        </div>
    )
}
export default Post