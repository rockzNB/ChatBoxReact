// import React, { useEffect, useRef, useState } from 'react';
//
//
// function App() {
//
//     const messageEl = useRef(null);
//     const [messages, setMessages] = useState([]);
//
//     useEffect(() => {
//         if (messageEl) {
//             messageEl.current.addEventListener('DOMNodeInserted', event => {
//                 const { currentTarget: target } = event;
//                 target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
//             });
//         }
//     }, [])
//
//     useEffect(() => {
//         const generateDummyMessage = () => {
//             setInterval(() => {
//                 setMessages(prevMsg => [...prevMsg, generateMessage()]);
//             }, 2000);
//         }
//         generateDummyMessage();
//     }, []);
//
//     return (
//         <div className="App">
//             <h3>Auto scroll to bottom in react chat app - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h3>
//             <div className="chat">
//                 <div className="head">ChatBot</div>
//                 <div className="messages" ref={messageEl}>
//                     {messages.map((m, i) => <div key={i} className={`msg${i % 2 !== 0 ? ' dark' : ''}`}>{m}</div>)}
//                 </div>
//                 <div className="footer">
//                     <input type="text" placeholder="Type here..." />
//                     <img src={sendIcon} />
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default App;
