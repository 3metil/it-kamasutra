import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialogs.scss'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {



    let dialogsData1 = props.dialogsData.map(  item => <DialogItem name={item.name} id={item.id} />)
    let messagesElements = props.messagesData.map( item => <Message message={item.message}/> )
    return (
        <div className='dialogs'>
            <div className="dialogs-items">

               {dialogsData1}

            </div>
            <div className="messages">
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;