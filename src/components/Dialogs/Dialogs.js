import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const {dialogs, dialogsItems, active, dialog, messages, messageStyle} = classes

const Dialogs = ({messagesData, dialogsData}) => {


    const dialogsElements = dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
    const messagesElements = messagesData.map(el => <Message message={el.data}/>)

    return (
        <div className={dialogs}>
            <div className={dialogsItems}>
                {dialogsElements}
            </div>
            <div className={messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs