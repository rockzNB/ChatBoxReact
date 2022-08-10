import React, {useState, useRef, useEffect} from 'react';
import './chatStyles.css'
import GiftRow from "./giftRow";








export default function ChatBox() {

    const [textValue, setTextValue] = useState('');
    const [textMessages, setTextMessages] = useState([]);
    const messageRef = useRef(null)
    useEffect(() => {
            if (messageRef.current) {
                messageRef.current.scrollIntoView(
                    {
                        behavior: 'smooth',
                        block: 'end',
                        inline: 'nearest'
                    })
            }
        },
        [textValue])





    const sendMessage = (e) => {
        e.preventDefault();
        if (textValue !=='') {
            setTextMessages([
                ...textMessages,
                textValue

            ]);
            setTextValue('')
        }

    }





    return (
            <>

                <div  className='chat_container'>
                    <div ref={messageRef} className='chat_window'>
                         <div    className='textContainer'>
                             {textMessages.map((text) => (
                                 <div   className='textArea'>{text}</div>
                            ))}
                         </div>
                    </div>


                <form onSubmit={sendMessage} id='chat_form'>
                    <input

                        type='text'
                             value={textValue}
                             onChange={(e) => setTextValue(e.target.value)}
                             name='enterMsg'
                            placeholder='Type your message...'
                           className='chat_input'/>


                    <button type='submit'  className='chat_sendBtn'>
                        <text><b>SEND</b></text>
                        <i></i></button>
                        <GiftRow></GiftRow>

                </form>
            </div>

                </>


    );}






