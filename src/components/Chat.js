import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function Chat({name, message, timestamp, url}) {
    return (
        <Link to={`/chat/${name}`}>
            <div className="chat">
                <Avatar alt={name} src={url} className="chat_image" />
                <div className="chat_detailes">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className="chat_timestamp">{timestamp}</p>
            </div>
        </Link>
    )
}

export default Chat