import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const {dialogs, dialogsItems, active, dialog, messages, messageStyle} = classes

const DialogItem = ({name, id}) => {
    return (
        <div className={dialog + ' ' + active}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}
const Message = ({message}) => {
    return (
        <div className={messageStyle}>
            {message}
        </div>
    )
}
const Dialogs = () => {

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
    return (
        <div className={dialogs}>
            <div className={dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name="Valera" id="2"/>
                <DialogItem name="Alex" id="3"/>
                <DialogItem name="Sanya" id="4"/>
                <DialogItem name="Petya" id="5"/>
            </div>
            <div className={messages}>
                <Message message={messagesData[0].data}/>
                <Message message={messagesData[1].data}/>
                <Message message={messagesData[2].data}/>
            </div>
        </div>
    )
}
export default Dialogs