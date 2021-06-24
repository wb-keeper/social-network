import  classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// const {item} = classes

const Profile = ({posts}) => {
    return (
        <div>
           <ProfileInfo />
           <MyPosts posts={posts}/>
        </div>
    )
}
export default Profile