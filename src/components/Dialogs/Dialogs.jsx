import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialogs.scss'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className='dialog'>
            <NavLink to={path} >{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className="message">{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Angela' },
        { id: 3, name: 'Dwight' },
        { id: 4, name: 'Michel' },
        { id: 5, name: 'Jim' },
        { id: 6, name: 'Pam' }
    ]

    let dialogsElements = [

        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}  />,
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}  />

    ]


    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Goodbye' },
        { id: 3, message: 'Hello' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Come on' },
        { id: 6, message: 'Oh my' }
    ]

    let dialogsData1 = dialogsData.map(  item => <DialogItem name={item.name} id={item.id} />)
    let messagesElements = messagesData.map( item => <Message message={item.message}/> )
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