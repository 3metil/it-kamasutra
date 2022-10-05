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
    return (
        <div className='dialogs'>
            <div className="dialogs-items">

                <div className='dialog'>
                    <DialogItem name='Dimych' id='1' />
                </div>
                <div className='dialog'>
                    <DialogItem name='Sveta' id='2' />
                </div>
                <div className='dialog'>
                    <DialogItem name='Sasha' id='3' />
                </div>
                <div className='dialog'>
                    <DialogItem name='Viktor' id='4' />
                </div>
                <div className='dialog'>
                    <DialogItem name='Valera' id='5' />
                </div>
              
            </div>
            <div className="messages">
                <Message message='Hi'/>
                <Message message='How are you?' />
                <Message message='Yo' />
                
            </div>
        </div>
    )
}

export default Dialogs;