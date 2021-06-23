import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const {dialogs, dialogsItems, active, dialog, messages, messageStyle} = classes

const Dialogs = () => {

    const messagesData = [
        {
            id: 1,
            data: 'Its'
        },
        {
            id: 2,
            data: 'Youuu'
        },
        {
            id: 3,
            data: 'Message3'
        }
    ]
    const dialogsData = [
        {
            id: 1,
            name: 'Dimych'
        },
        {
            id: 2,
            name: 'Valera'
        },
        {
            id: 3,
            name: 'Alex'
        },
        {
            id: 4,
            name: 'Sanya'
        },
        {
            id: 5,
            name: 'Petya'
        },
    ]
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