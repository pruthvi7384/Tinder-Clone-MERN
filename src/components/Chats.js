import React from 'react';
import Chat from './Chat';
function Chats(){
    const chats =[
        {
            name: 'Sarah',
            message: 'Hey! how are you',
            timestamp: '35 minutes ago',
            url: 'https://media.nngroup.com/media/people/photos/Headshot7.png.600x600_q75_autocrop_crop-smart_upscale.png'
        },
        {
            name: 'Ellen',
            message: 'Whats up ?',
            timestamp: '55 minutes ago',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLPDWXJNGaIPbf3qwnoSc8fYvH5-zqeQgNKw&usqp=CAU'
        },
        {
            name: 'Sandra',
            message: 'Ola!',
            timestamp: '3 minutes ago',
            url: 'https://m.media-amazon.com/images/I/41TtmLJcV9L._SL1000_.jpg'
        },
        {
            name: 'Natasha',
            message: 'Ooops there is he is...',
            timestamp: '1 week ago',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEkaK5ud7M7pk0TpWHUe0PNlkyeY_RJZXpQ&usqp=CAU'
        }
    ]
    return (
        <div className="chats">
            {chats.map((chat)=>(
                <Chat key={chat.name} name={chat.name} message={chat.message} timestamp={chat.timestamp} url={chat.url}/>
            ))}
        </div>
    )
}

export default Chats