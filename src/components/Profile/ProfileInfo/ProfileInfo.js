import  classes from './ProfileInfo.module.css'

const {item, descriptionBlock} = classes

const ProfileInfo = () => {
    return (
        <div>
            <div className={item}>
                <img  src='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701372504.jpg'/>
            </div>
            <div className={descriptionBlock}>
                ava + descr
            </div>

        </div>
    )
}
export default ProfileInfo