import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';

function ChatRoom() {
    const [messages,setmessage] = useState([
        {
            name: 'Ellen',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLPDWXJNGaIPbf3qwnoSc8fYvH5-zqeQgNKw&usqp=CAU',
            message: 'Whats Up'
        },
        {
            name: 'Ellen',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLPDWXJNGaIPbf3qwnoSc8fYvH5-zqeQgNKw&usqp=CAU',
            message: 'Hows it going'
        },
        {
            message: 'Hows it going'
        }
    ])
    const [input,setInput] = useState('');
    const sendMessage = (e)=>{
        e.preventDefault();
        setmessage([...messages,{message:input}]);
        setInput('');
    }
    return (
        <div>
            <div className="chat-room">
                <p className="chat-timestamp">YOU MATCHED WITH ELLEN ON 10/08/21</p>
                {messages.map((message)=>(
                    message.name ? (
                        <div className="chatscrren_messages">
                            <Avatar alt={message.name} src={message.image} className="chat_scrren_image" />
                            <p className="chat_scrren_text">{message.message}</p>
                        </div>
                    ) : (
                        <div className="chatscrren_messages">
                            <p className="chatscrren_user_text">{message.message}</p>
                        </div>
                    )
                ))}
            </div>
            <form className="chat_rom_input">
                    <input className="chat_inputFiled" value={input} type="text" placeholder="Type a message..." onChange={e=>setInput(e.target.value)}/>
                    <button className="send_button" onClick={sendMessage}>SEND</button>
            </form>
        </div>
    )
}

export default ChatRoom