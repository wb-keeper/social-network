import classes from './Message.module.css'
import {NavLink} from "react-router-dom";

const {messageStyle} = classes

const Message = ({message}) => {
    return (
        <div className={messageStyle}>
            {message}
        </div>
    )
}

export default Message