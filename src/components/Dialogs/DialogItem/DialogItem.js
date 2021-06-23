import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const {active, dialog} = classes

const DialogItem = ({name, id}) => {
    return (
        <div className={dialog + ' ' + active}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}

export default DialogItem