// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);


//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     if (!conversationId) {
//       setConversationId(Date.now().toString());
//     }
//   }, [conversationId]);

//   const sendMessage = async (event) => {
//     event.preventDefault();

//     if (message.trim() === '') return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [
//       ...prevHistory,
//       { sender: 'user', text: message },
//     ]);

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           message,
//           conversation_id: conversationId, // Send the conversation_id with the message
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Error with API request');
//       }

//       const data = await response.json();
//       setChatHistory((prevHistory) => [
//         ...prevHistory,
//         { sender: 'ai', text: data.response },
//       ]);
//       setMessage('');
//     } catch (error) {
//       console.error('Error:', error);
//       setLoading(false);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-zinc-950 fixed inset-0 flex justify-center items-center p-4">

//       <div className="w-full max-w-lg bg-zinc-900 rounded-lg shadow-lg p-4 sm:p-6">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-xl text-white sm:text-2xl font-semibold">PaulBot</h1>
//         </div>

//         <div
//           ref={chatContainerRef}
//           className="overflow-y-auto h-96 space-y-4 mb-4 p-4 border border-zinc-900 rounded-lg "
//         >
//           {chatHistory.map((msg, index) => (
//             <div
//               key={index}
//               className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//             >
//               <div className={`max-w-xs p-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-zinc-700 text-white'}`}>
//                 {msg.text}
//               </div>
//             </div>
//           ))}

//           {loading && (
//             <div className="flex justify-start">
//               <div className="max-w-xs p-3 rounded-lg bg-gray-900 text-white animate-pulse">
//                 AI is typing...
//               </div>
//             </div>
//           )}
//         </div>


//         {isChatActive && (
//           <form onSubmit={sendMessage} className="flex flex-col sm:flex-row items-center  sm:space-x-2">
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="w-full p-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-zinc-950 text-white text-sm sm:text-base"
//               placeholder="Type your message..."
//             />
//             <button
//               type="submit"
//               className="bg-gray-600 text-white py-2 px-4 rounded-lg text-sm sm:text-base disabled:opacity-50"
//               disabled={loading || !message.trim()}
//             >
//               Send
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;







// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     if (!conversationId) {
//       setConversationId(Date.now().toString());
//     }
//   }, [conversationId]);

//   const sendMessage = async (event) => {
//     event.preventDefault();

//     if (message.trim() === '') return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [
//       ...prevHistory,
//       { sender: 'user', text: message },
//     ]);

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           message,
//           conversation_id: conversationId,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Error with API request');
//       }

//       const data = await response.json();
//       setChatHistory((prevHistory) => [
//         ...prevHistory,
//         { sender: 'ai', text: data.response },
//       ]);
//       setMessage('');
//     } catch (error) {
//       console.error('Error:', error);
//       setLoading(false);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     // <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center p-6">
//     //   <div className="w-full max-w-3xl bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md">
//     //     <div className="flex items-center justify-between mb-6">
//     //       <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md">PaulBot 🤖</h1>
//     //       {/* <span className="text-sm text-gray-400 italic animate-fade-in delay-100">Powered by Groq & FastAPI</span> */}
//     //     </div>

//     <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center p-6">
//       {/* <div className="w-full max-w-[650px] h-[900px] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col"> */}
//       <div className="w-full max-w-[650px] h-[800px] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md">
//             PaulBot 🤖
//           </h1>
//         </div>

//         <div
//           ref={chatContainerRef}
//           className="overflow-y-auto h-[32rem] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
//         >
//           {chatHistory.map((msg, index) => (
//             <div
//               key={index}
//               className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
//             >
//               {/* <div className={`relative mr-[20px] ml-[20px] group max-w-[75%] px-6 py-4 rounded-3xl text-base sm:text-lg shadow-lg border transition-all duration-300 transform hover:scale-[1.03] backdrop-blur-md ${msg.sender === 'user' ? 'bg-gradient-to-r from-blue-700 to-blue-500 text-white border-blue-300' : 'bg-gradient-to-r from-gray-700 to-zinc-700 text-white border-zinc-500'}`}> */}
//               {/* <div className={`relative mr-[20px] ml-[20px] group max-w-[75%] px-6 py-4 rounded-3xl text-lg sm:text-xl shadow-lg border transition-all duration-300 transform hover:scale-[1.03] backdrop-blur-md ${msg.sender === 'user' ? 'bg-gradient-to-r from-blue-700 to-blue-500 text-white border-blue-300' : 'bg-gradient-to-r from-gray-700 to-zinc-700 text-white border-zinc-500'}`}> */}
//               <div className={`relative mr-[20px] ml-[20px] group max-w-[75%] px-6 py-4 rounded-3xl text-[24px] sm:text-[28px] shadow-lg border transition-all duration-300 transform hover:scale-[1.03] backdrop-blur-md ${msg.sender === 'user' ? 'bg-gradient-to-r from-blue-700 to-blue-500 text-white border-blue-300' : 'bg-gradient-to-r from-gray-700 to-zinc-700 text-white border-zinc-500'}`}>
//               {/* <div className={`relative mr-[20px] ml-[20px] group max-w-[75%] px-6 py-4 rounded-3xl text-[24px] sm:text-[28px] shadow-lg border transition-all duration-300 transform hover:scale-[1.03] backdrop-blur-md ${msg.sender === 'user' ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white border-pink-300' : 'bg-gradient-to-r from-gray-800 to-slate-700 text-white border-slate-600'}`}> */}

//                 <p>{msg.text}</p>
//                 <span className="absolute -bottom-3 right-4 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                   {msg.sender === 'user' ? 'You' : 'PaulBot'}
//                 </span>
//               </div>
//             </div>
//           ))}

//           {loading && (
//             <div className="flex justify-start animate-pulse">
//               <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
//                 AI is typing...
//               </div>
//             </div>
//           )}
//         </div>

//         {isChatActive && (
//           <form
//             onSubmit={sendMessage}
//             className="mt-8 flex flex-col sm:flex-row items-center gap-4 animate-fade-in"
//           >
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="flex-grow mt-[10px] mb-[10px] px-5 py-3 rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-base placeholder-gray-500 shadow-inner"
//               placeholder="Ask something..."
//             />

//             <button
//               type="submit"
//               className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold text-2xl py-6 px-12 rounded-3xl shadow-lg transition duration-300 ease-in-out disabled:opacity-50"
//               disabled={loading || !message.trim()}
//             >
//               Send
//             </button>



//             {/* <button
//               type="submit"
//               className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-2xl shadow-md transition duration-300 ease-in-out disabled:opacity-50"
//               disabled={loading || !message.trim()}
//             >
//               Send
//             </button> */}
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;







// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     if (!conversationId) {
//       setConversationId(Date.now().toString());
//     }
//   }, [conversationId]);

//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message.trim() === '') return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [
//       ...prevHistory,
//       { sender: 'user', text: message },
//     ]);

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message, conversation_id: conversationId }),
//       });

//       if (!response.ok) throw new Error('Error with API request');

//       const data = await response.json();
//       setChatHistory((prevHistory) => [
//         ...prevHistory,
//         { sender: 'ai', text: data.response },
//       ]);
//       setMessage('');
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center p-6">
//       <div className="w-full max-w-[650px] h-[800px] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md">
//             PaulBot 🤖
//           </h1>
//         </div>

//         <div
//           ref={chatContainerRef}
//           className="overflow-y-auto h-[32rem] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
//         >
//           {chatHistory.map((msg, index) => (
//             <div
//               key={index}
//               className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
//             >
//               <div className={`relative mr-[20px] ml-[20px] group max-w-[75%] px-6 py-4 rounded-3xl text-[20px] sm:text-[22px] shadow-lg border transition-all duration-300 transform hover:scale-[1.03] backdrop-blur-md ${msg.sender === 'user'
//                 ? 'bg-gradient-to-r from-blue-700 to-blue-500 text-white border-blue-300'
//                 : 'bg-gradient-to-r from-gray-700 to-zinc-700 text-white border-zinc-500'
//                 }`}>
//                 <p>{msg.text}</p>
//                 <span className="absolute -bottom-3 right-4 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                   {msg.sender === 'user' ? 'You' : 'PaulBot'}
//                 </span>
//               </div>
//             </div>
//           ))}

//           {loading && (
//             <div className="flex justify-start animate-pulse">
//               <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
//                 AI is typing...
//               </div>
//             </div>
//           )}
//         </div>

//         {isChatActive && (
//           <form
//             onSubmit={sendMessage}
//             className="mt-6 flex flex-row items-center gap-4 animate-fade-in"
//           >
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="flex-grow px-5 py-3 rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-base placeholder-gray-500 shadow-inner"
//               placeholder="Ask something..."
//             />

//             <button
//               type="submit"
//               disabled={loading || !message.trim()}
//               className="focus:outline-none"
//             >
//               <img
//                 src="/img.png"
//                 alt="Send"
//                 className="w-1 h-1 object-contain rounded-lg hover:scale-105 transition-transform duration-200"
//                 style={{ maxWidth: '60px', maxHeight: '60px', padding: '0', margin: '0', border: 'none', boxShadow: 'none', outline: 'none', background: 'transparent' }}
//               />
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;










// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     if (!conversationId) {
//       setConversationId(Date.now().toString());
//     }
//   }, [conversationId]);

//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message.trim() === '') return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [
//       ...prevHistory,
//       { sender: 'user', text: message },
//     ]);

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message, conversation_id: conversationId }),
//       });

//       if (!response.ok) throw new Error('Error with API request');

//       const data = await response.json();
//       setChatHistory((prevHistory) => [
//         ...prevHistory,
//         { sender: 'ai', text: data.response },
//       ]);
//       setMessage('');
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center p-6">
//       <div className="w-full max-w-[650px] h-[800px] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md">
//             PaulBot 🤖
//           </h1>
//         </div>

//         <div
//           ref={chatContainerRef}
//           className="overflow-y-auto h-[32rem] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
//         >
//           {chatHistory.map((msg, index) => (
//             <div
//               key={index}
//               className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
//             >
//               <div
//                 className={`relative group max-w-[75%] text-[20px] sm:text-[22px] transition-all duration-300 transform hover:scale-[1.03] ${msg.sender === 'user'
//                   ? 'bg-gradient-to-r from-blue-700 to-blue-500 text-white border-blue-300'
//                   : 'bg-gradient-to-r from-gray-700 to-zinc-700 text-white border-zinc-500'
//                   }`}
//                 style={{
//                   borderRadius: '24px',
//                   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
//                   border: '1.5px solid',
//                   padding: '16px 20px',
//                   marginLeft: '20px',
//                   marginRight: '20px',
//                   backdropFilter: 'blur(4px)',
//                 }}
//               >
//                 <p>{msg.text}</p>
//                 <span className="absolute -bottom-3 right-4 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                   {msg.sender === 'user' ? 'You' : 'PaulBot'}
//                 </span>
//               </div>
//             </div>
//           ))}

//           {loading && (
//             <div className="flex justify-start animate-pulse">
//               <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
//                 AI is typing...
//               </div>
//             </div>
//           )}
//         </div>

//         {isChatActive && (
//           <form
//             onSubmit={sendMessage}
//             className="mt-6 flex flex-row items-center gap-4 animate-fade-in"
//           >
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="flex-grow px-5 py-3 rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-base placeholder-gray-500 shadow-inner"
//               placeholder="Ask something..."
//             />

//             <button
//               type="submit"
//               disabled={loading || !message.trim()}
//               className="focus:outline-none"
//             >
//               <img
//                 src="/img.png"
//                 alt="Send"
//                 className="object-contain rounded-md hover:scale-105 transition-transform duration-200"
//                 style={{
//                   width: '36px',
//                   height: '36px',
//                   border: 'none',
//                   padding: '0',
//                   margin: '0',
//                   background: 'transparent',
//                 }}
//               />
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;






// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     if (!conversationId) {
//       setConversationId(Date.now().toString());
//     }
//   }, [conversationId]);

//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message.trim() === '') return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [
//       ...prevHistory,
//       { sender: 'user', text: message },
//     ]);

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message, conversation_id: conversationId }),
//       });

//       if (!response.ok) throw new Error('Error with API request');

//       const data = await response.json();
//       setChatHistory((prevHistory) => [
//         ...prevHistory,
//         { sender: 'ai', text: data.response },
//       ]);
//       setMessage('');
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center p-6">
//       <div className="w-full max-w-[700px] h-[800px] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md">
//             PaulBot 🤖
//           </h1>
//         </div>

//         <div
//           ref={chatContainerRef}
//           className="overflow-y-auto h-[32rem] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
//         >
//           {chatHistory.map((msg, index) => (
//             <div
//               key={index}
//               className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
//             >
//               <div className={`${msg.sender === 'user' ? 'user-message' : 'ai-message'} chat-bubble`}>
//                 <p>{msg.text}</p>
//                 <span className="absolute -bottom-3 right-4 text-xs mr=[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                   {msg.sender === 'user' ? 'You' : 'PaulBot'}
//                 </span>
//               </div>
//             </div>
//           ))}

//           {loading && (
//             <div className="flex justify-start animate-pulse">
//               <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
//                 AI is typing...
//               </div>
//             </div>
//           )}
//         </div>

//         {isChatActive && (
//           <form
//             onSubmit={sendMessage}
//             className="mt-6 flex flex-row items-center gap-4 animate-fade-in"
//           >
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="flex-grow px-5 py-3 rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-base placeholder-gray-500 shadow-inner"
//               placeholder="Ask something..."
//             />

//             <button
//               type="submit"
//               disabled={loading || !message.trim()}
//               className="focus:outline-none"
//             >
//               <img
//                 src="/img.png"
//                 alt="Send"
//                 className="w-[40px] h-[40px] object-contain rounded-lg hover:scale-105 transition-transform duration-200"
//                 style={{
//                   border: 'none',
//                   boxShadow: 'none',
//                   outline: 'none',
//                   background: 'transparent',
//                 }}
//               />
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;






// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   // useEffect(() => {
//   //   if (!conversationId) {
//   //     setConversationId(Date.now().toString());
//   //   }
//   // }, [conversationId]);

//   useEffect(() => {
//     const storedId = localStorage.getItem("conversationId");
//     if (!storedId) {
//       const newId = Date.now().toString();
//       localStorage.setItem("conversationId", newId);
//       setConversationId(newId);
//     } else {
//       setConversationId(storedId);
//     }
//   }, []);

//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message.trim() === '') return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [
//       ...prevHistory,
//       { sender: 'user', text: message },
//     ]);

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message, role: 'user', conversation_id: conversationId }),
//       });

//       if (!response.ok) throw new Error('Error with API request');

//       const data = await response.json();
//       setChatHistory((prevHistory) => [
//         ...prevHistory,
//         { sender: 'ai', text: data.response },
//       ]);
//       setMessage('');
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center py-10 px-4">
//       <div className="w-full max-w-[650px] max-h-[95vh] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md ml-[10px]">
//             PaulBot 🤖
//           </h1>
//         </div>

//         <div
//           ref={chatContainerRef}
//           className="overflow-y-auto flex-grow bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
//         >
//           {chatHistory.map((msg, index) => (
//             <div
//               key={index}
//               className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
//             >
//               <div className={`${msg.sender === 'user' ? 'user-message' : 'ai-message'} chat-bubble`}>
//                 <p>{msg.text}</p>
//               </div>
//             </div>
//           ))}

//           {loading && (
//             <div className="flex justify-start animate-pulse">
//               <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
//                 AI is typing🤔
//               </div>
//             </div>
//           )}
//         </div>

//         {isChatActive && (
//           <form
//             onSubmit={sendMessage}
//             className="mt-4 flex flex-row items-center gap-4 animate-fade-in"
//           >
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="flex-grow px-10 py-10 ml-[10px] mr=[0px] rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner"
//               // className="flex-grow px-10 py-7 rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-base placeholder-gray-500 shadow-inner"
//               placeholder="Ask something..."
//             />

//             <button
//               type="submit"
//               disabled={loading || !message.trim()}
//               className="focus:outline-none bg-transparent p-0 m-0 border-none"
//             >
//               <img
//                 src="/img.png"
//                 // alt="Send"
//                 className="w-[55px] h-[80px] ml-[0px] mr=[10px] object-contain hover:scale-105 transition-transform duration-200"
//                 style={{
//                   border: 'none',
//                   background: 'transparent',
//                   padding: 0,
//                   margin: 0,
//                   boxShadow: 'none',
//                 }}
//               />
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;














// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const options = [
//   "International Money Transfer",
//   "Domestic Money Transfer",
//   "Foreign Exchange",
//   "Gold Loan Services",
//   "Tours & Travel Services",
//   "Utility & Bill Payments",
//   "Paul Merchants Franchise/Partner Program",
//   "Paul Pay App Support",
//   "KYC and Account Verification",
//   "Others"
// ];

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     const storedId = localStorage.getItem("conversationId");
//     if (!storedId) {
//       const newId = Date.now().toString();
//       localStorage.setItem("conversationId", newId);
//       setConversationId(newId);
//     } else {
//       setConversationId(storedId);
//     }
//   }, []);

//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message.trim() === '') return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [
//       ...prevHistory,
//       { sender: 'user', text: message },
//     ]);

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message, role: 'user', conversation_id: conversationId }),
//       });

//       if (!response.ok) throw new Error('Error with API request');

//       const data = await response.json();
//       setChatHistory((prevHistory) => [
//         ...prevHistory,
//         { sender: 'ai', text: data.response },
//       ]);
//       setMessage('');
//       setIsChatActive(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOptionClick = async (option) => {
//     if (option === "Others") {
//       setIsChatActive(true);
//       return;
//     }
//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: `Tell me about ${option}`, role: 'user', conversation_id: conversationId })
//       });

//       const data = await response.json();
//       setChatHistory([{ sender: 'ai', text: data.response }]);
//       setIsChatActive(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center py-10 px-4">
//       <div className="w-full max-w-[650px] max-h-[95vh] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md ml-[10px]">
//             PaulBot 🤖
//           </h1>
//         </div>

//         {!isChatActive ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {options.map((option, idx) => (
//               <div
//                 key={idx}
//                 className="bg-zinc-800 text-white p-4 rounded-xl text-center cursor-pointer shadow-md transition-transform transform hover:scale-105 hover:bg-zinc-700"
//                 onClick={() => handleOptionClick(option)}
//                 title={`Learn more about ${option}`}
//               >
//                 {`${idx + 1}. ${option}`}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <>
//             <div
//               ref={chatContainerRef}
//               className="overflow-y-auto flex-grow bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
//             >
//               {chatHistory.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
//                 >
//                   <div className={`${msg.sender === 'user' ? 'user-message' : 'ai-message'} chat-bubble`}>
//                     <p>{msg.text}</p>
//                   </div>
//                 </div>
//               ))}

//               {loading && (
//                 <div className="flex justify-start animate-pulse">
//                   <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
//                     AI is typing🤔
//                   </div>
//                 </div>
//               )}
//             </div>

//             <form
//               onSubmit={sendMessage}
//               className="mt-4 flex flex-row items-center gap-4 animate-fade-in"
//             >
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-grow px-10 py-10 ml-[10px] mr-[0px] rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner"
//                 placeholder="Ask something..."
//               />

//               <button
//                 type="submit"
//                 disabled={loading || !message.trim()}
//                 className="focus:outline-none bg-transparent p-0 m-0 border-none"
//               >
//                 <img
//                   src="/img.png"
//                   className="w-[55px] h-[80px] ml-[0px] mr=[10px] object-contain hover:scale-105 transition-transform duration-200"
//                   style={{ border: 'none', background: 'transparent', padding: 0, margin: 0, boxShadow: 'none' }}
//                 />
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;







// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const options = [
//   "International Money Transfer",
//   "Domestic Money Transfer",
//   "Foreign Exchange",
//   "Gold Loan Services",
//   "Tours & Travel Services",
//   "Utility & Bill Payments",
//   "Paul Merchants Franchise/Partner Program",
//   "Paul Pay App Support",
//   "KYC and Account Verification",
//   "Others"
// ];

// const greetingKeywords = ["hi", "hello", "hey", "good morning", "good evening", "good afternoon"];

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(false);
//   const [hasWelcomed, setHasWelcomed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     const storedId = localStorage.getItem("conversationId");
//     if (!storedId) {
//       const newId = Date.now().toString();
//       localStorage.setItem("conversationId", newId);
//       setConversationId(newId);
//     } else {
//       setConversationId(storedId);
//     }
//   }, []);

//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message.trim() === '') return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [
//       ...prevHistory,
//       { sender: 'user', text: message },
//     ]);

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message, role: 'user', conversation_id: conversationId }),
//       });

//       if (!response.ok) throw new Error('Error with API request');

//       const data = await response.json();
//       const newHistory = [
//         { sender: 'ai', text: data.response },
//       ];

//       const messageLower = message.toLowerCase();
//       const isGreeting = greetingKeywords.some(keyword => messageLower.includes(keyword));

//       if (isGreeting && !hasWelcomed) {
//         newHistory.push({
//           sender: 'ai',
//           text:
//             "What do you want to know about?\n" +
//             options.map((opt, i) => `${i + 1}. ${opt}`).join("\n")
//         });
//         setHasWelcomed(true);
//         setIsChatActive(false); // show options again
//       }

//       setChatHistory((prev) => [...prev, ...newHistory]);
//       setMessage('');
//       setIsChatActive(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOptionClick = async (option) => {
//     if (option === "Others") {
//       setIsChatActive(true);
//       return;
//     }
//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: `Tell me about ${option}`, role: 'user', conversation_id: conversationId })
//       });

//       const data = await response.json();
//       setChatHistory([{ sender: 'ai', text: data.response }]);
//       setIsChatActive(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center py-10 px-4">
//       <div className="w-full max-w-[650px] max-h-[95vh] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md ml-[10px]">
//             PaulBot 🤖
//           </h1>
//         </div>

//         {!isChatActive ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {options.map((option, idx) => (
//               <div
//                 key={idx}
//                 className="option-box"
//                 onClick={() => handleOptionClick(option)}
//                 title={`Learn more about ${option}`}
//               >
//                 {`${idx + 1}. ${option}`}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <>
//             <div
//               ref={chatContainerRef}
//               className="overflow-y-auto flex-grow bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
//             >
//               {chatHistory.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
//                 >
//                   <div className={`${msg.sender === 'user' ? 'user-message' : 'ai-message'} chat-bubble`}>
//                     <p>{msg.text}</p>
//                   </div>
//                 </div>
//               ))}

//               {loading && (
//                 <div className="flex justify-start animate-pulse">
//                   <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
//                     AI is typing🤔
//                   </div>
//                 </div>
//               )}
//             </div>

//             <form
//               onSubmit={sendMessage}
//               className="mt-4 flex flex-row items-center gap-4 animate-fade-in"
//             >
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-grow px-10 py-10 ml-[10px] mr-[0px] rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner"
//                 placeholder="Ask something..."
//               />

//               <button
//                 type="submit"
//                 disabled={loading || !message.trim()}
//                 className="focus:outline-none bg-transparent p-0 m-0 border-none"
//               >
//                 <img
//                   src="/img.png"
//                   className="w-[55px] h-[80px] ml-[0px] mr=[10px] object-contain hover:scale-105 transition-transform duration-200"
//                   style={{ border: 'none', background: 'transparent', padding: 0, margin: 0, boxShadow: 'none' }}
//                 />
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;






// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const options = [
//   "International Money Transfer",
//   "Domestic Money Transfer",
//   "Foreign Exchange",
//   "Gold Loan Services",
//   "Tours & Travel Services",
//   "Utility & Bill Payments",
//   "Paul Merchants Franchise/Partner Program",
//   "Paul Pay App Support",
//   "KYC and Account Verification",
//   "Others"
// ];

// const greetingKeywords = ["hi", "hello", "hey", "good morning", "good evening", "good afternoon"];

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(false);
//   const [hasWelcomed, setHasWelcomed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     const storedId = localStorage.getItem("conversationId");
//     if (!storedId) {
//       const newId = Date.now().toString();
//       localStorage.setItem("conversationId", newId);
//       setConversationId(newId);
//     } else {
//       setConversationId(storedId);
//     }
//   }, []);

//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message.trim() === '') return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [
//       ...prevHistory,
//       { sender: 'user', text: message },
//     ]);

//     const messageLower = message.toLowerCase();
//     const isGreeting = greetingKeywords.some(keyword => messageLower.includes(keyword));

//     if (isGreeting && !hasWelcomed) {
//       setHasWelcomed(true);
//       setIsChatActive(false);
//       setMessage('');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message, role: 'user', conversation_id: conversationId }),
//       });

//       if (!response.ok) throw new Error('Error with API request');

//       const data = await response.json();
//       const newHistory = [
//         { sender: 'ai', text: data.response },
//       ];

//       setChatHistory((prev) => [...prev, ...newHistory]);
//       setMessage('');
//       setIsChatActive(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOptionClick = async (option) => {
//     if (option === "Others") {
//       setIsChatActive(true);
//       return;
//     }
//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: `Tell me about ${option}`, role: 'user', conversation_id: conversationId })
//       });

//       const data = await response.json();
//       setChatHistory([{ sender: 'ai', text: data.response }]);
//       setIsChatActive(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center py-10 px-4">
//       <div className="w-full max-w-[650px] max-h-[95vh] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md ml-[10px]">
//             PaulBot 🤖
//           </h1>
//         </div>

//         {!isChatActive && hasWelcomed ? (
//           <>
//             <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">What do you want to know about?</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {options.map((option, idx) => (
//                 <div
//                   key={idx}
//                   className="option-box"
//                   onClick={() => handleOptionClick(option)}
//                   title={`Learn more about ${option}`}
//                 >
//                   {`${idx + 1}. ${option}`}
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <>
//             <div
//               ref={chatContainerRef}
//               className="overflow-y-auto flex-grow bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
//             >
//               {chatHistory.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
//                 >
//                   <div className={`${msg.sender === 'user' ? 'user-message' : 'ai-message'} chat-bubble`}>
//                     <p>{msg.text}</p>
//                   </div>
//                 </div>
//               ))}

//               {loading && (
//                 <div className="flex justify-start animate-pulse">
//                   <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
//                     AI is typing🤔
//                   </div>
//                 </div>
//               )}
//             </div>

//             <form
//               onSubmit={sendMessage}
//               className="mt-4 flex flex-row items-center gap-4 animate-fade-in"
//             >
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-grow px-10 py-10 ml-[10px] mr-[0px] rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner"
//                 placeholder="Ask something..."
//               />

//               <button
//                 type="submit"
//                 disabled={loading || !message.trim()}
//                 className="focus:outline-none bg-transparent p-0 m-0 border-none"
//               >
//                 <img
//                   src="/img.png"
//                   className="w-[55px] h-[80px] ml-[0px] mr=[10px] object-contain hover:scale-105 transition-transform duration-200"
//                   style={{ border: 'none', background: 'transparent', padding: 0, margin: 0, boxShadow: 'none' }}
//                 />
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;







// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const options = [
//   "International Money Transfer",
//   "Domestic Money Transfer",
//   "Foreign Exchange",
//   "Gold Loan Services",
//   "Tours & Travel Services",
//   "Utility & Bill Payments",
//   "Paul Merchants Franchise/Partner Program",
//   "Paul Pay App Support",
//   "KYC and Account Verification",
//   "Others"
// ];

// const greetingKeywords = ["hi", "hello", "hey", "good morning", "good evening", "good afternoon"];

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(false);
//   const [hasWelcomed, setHasWelcomed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     const storedId = localStorage.getItem("conversationId");
//     if (!storedId) {
//       const newId = Date.now().toString();
//       localStorage.setItem("conversationId", newId);
//       setConversationId(newId);
//     } else {
//       setConversationId(storedId);
//     }
//   }, []);

//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message.trim() === '') return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [
//       ...prevHistory,
//       { sender: 'user', text: message },
//     ]);

//     const messageLower = message.toLowerCase();
//     const isGreeting = greetingKeywords.some(keyword => messageLower.includes(keyword));

//     if (isGreeting && !hasWelcomed) {
//       setHasWelcomed(true);
//       setIsChatActive(false);
//       setMessage('');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message, role: 'user', conversation_id: conversationId }),
//       });

//       if (!response.ok) throw new Error('Error with API request');

//       const data = await response.json();
//       const newHistory = [
//         { sender: 'ai', text: data.response },
//       ];

//       setChatHistory((prev) => [...prev, ...newHistory]);
//       setMessage('');
//       setIsChatActive(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOptionClick = async (option) => {
//     if (option === "Others") {
//       // Reset conversation on "Others"
//       const newId = Date.now().toString();
//       localStorage.setItem("conversationId", newId);
//       setConversationId(newId);
//       setChatHistory([]);
//       setIsChatActive(false);
//       setHasWelcomed(false);
//       setMessage('');
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           message: `Tell me about ${option}`,
//           role: 'user',
//           conversation_id: conversationId
//         })
//       });

//       const data = await response.json();
//       setChatHistory([{ sender: 'ai', text: data.response }]);
//       setIsChatActive(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center py-10 px-4">
//       <div className="w-full max-w-[650px] max-h-[95vh] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md ml-[10px]">
//             PaulBot 🤖
//           </h1>
//         </div>

//         {!isChatActive && hasWelcomed ? (
//           <>
//             <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">What do you want to know about?</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {options.map((option, idx) => (
//                 <div
//                   key={idx}
//                   className="option-box"
//                   onClick={() => handleOptionClick(option)}
//                   title={`Learn more about ${option}`}
//                 >
//                   {`${idx + 1}. ${option}`}
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <>
//             <div
//               ref={chatContainerRef}
//               className="overflow-y-auto flex-grow bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
//             >
//               {chatHistory.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
//                 >
//                   <div className={`${msg.sender === 'user' ? 'user-message' : 'ai-message'} chat-bubble`}>
//                     <p>{msg.text}</p>
//                   </div>
//                 </div>
//               ))}

//               {loading && (
//                 <div className="flex justify-start animate-pulse">
//                   <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
//                     AI is typing🤔
//                   </div>
//                 </div>
//               )}
//             </div>

//             <form
//               onSubmit={sendMessage}
//               className="mt-4 flex flex-row items-center gap-4 animate-fade-in"
//             >
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-grow px-10 py-10 ml-[10px] mr-[0px] rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner"
//                 placeholder="Ask something..."
//               />

//               <button
//                 type="submit"
//                 disabled={loading || !message.trim()}
//                 className="focus:outline-none bg-transparent p-0 m-0 border-none"
//               >
//                 <img
//                   src="/img.png"
//                   className="w-[55px] h-[80px] ml-[0px] mr=[10px] object-contain hover:scale-105 transition-transform duration-200"
//                   style={{ border: 'none', background: 'transparent', padding: 0, margin: 0, boxShadow: 'none' }}
//                 />
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;








// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const options = [
//   "International Money Transfer",
//   "Domestic Money Transfer",
//   "Foreign Exchange",
//   "Gold Loan Services",
//   "Tours & Travel Services",
//   "Utility & Bill Payments",
//   "Paul Merchants Franchise/Partner Program",
//   "Paul Pay App Support",
//   "KYC and Account Verification",
//   "Others"
// ];

// const greetingKeywords = ["hi", "hello", "hey", "good morning", "good evening", "good afternoon"];

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(false);
//   const [hasWelcomed, setHasWelcomed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     const storedId = localStorage.getItem("conversationId");
//     if (!storedId) {
//       const newId = Date.now().toString();
//       localStorage.setItem("conversationId", newId);
//       setConversationId(newId);
//     } else {
//       setConversationId(storedId);
//     }
//   }, []);

//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message.trim() === '') return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [
//       ...prevHistory,
//       { sender: 'user', text: message },
//     ]);

//     const messageLower = message.toLowerCase();
//     const isGreeting = greetingKeywords.some(keyword => messageLower.includes(keyword));

//     if (isGreeting && !hasWelcomed) {
//       setHasWelcomed(true);
//       setIsChatActive(false);
//       setMessage('');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message, role: 'user', conversation_id: conversationId }),
//       });

//       if (!response.ok) throw new Error('Error with API request');

//       const data = await response.json();
//       const newHistory = [{ sender: 'ai', text: data.response }];

//       setChatHistory((prev) => [...prev, ...newHistory]);
//       setMessage('');
//       setIsChatActive(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOptionClick = async (option) => {
//     if (option === "Others") {
//       const newId = Date.now().toString();
//       localStorage.setItem("conversationId", newId);
//       setConversationId(newId);

//       setChatHistory([]);
//       setMessage('');
//       setIsChatActive(false);
//       setHasWelcomed(false);

//       // Delay to allow re-render of welcome screen
//       setTimeout(() => setHasWelcomed(true), 100);

//       setLoading(false);
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           message: `Tell me about ${option}`,
//           role: 'user',
//           conversation_id: conversationId
//         })
//       });

//       const data = await response.json();
//       setChatHistory([{ sender: 'ai', text: data.response }]);
//       setIsChatActive(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center py-10 px-4">
//       <div className="w-full max-w-[650px] max-h-[95vh] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md ml-[10px]">
//             PaulBot 🤖
//           </h1>
//         </div>

//         {!isChatActive && hasWelcomed ? (
//           <>
//             <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">What do you want to know about?</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {options.map((option, idx) => (
//                 <div
//                   key={idx}
//                   className="option-box"
//                   onClick={() => handleOptionClick(option)}
//                   title={`Learn more about ${option}`}
//                 >
//                   {`${idx + 1}. ${option}`}
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <>
//             <div
//               ref={chatContainerRef}
//               className="overflow-y-auto flex-grow bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
//             >
//               {chatHistory.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
//                 >
//                   <div className={`${msg.sender === 'user' ? 'user-message' : 'ai-message'} chat-bubble`}>
//                     <p>{msg.text}</p>
//                   </div>
//                 </div>
//               ))}

//               {loading && (
//                 <div className="flex justify-start animate-pulse">
//                   <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
//                     AI is typing🤔
//                   </div>
//                 </div>
//               )}
//             </div>

//             <form
//               onSubmit={sendMessage}
//               className="mt-4 flex flex-row items-center gap-4 animate-fade-in"
//             >
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-grow px-10 py-10 ml-[10px] mr-[0px] rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner"
//                 placeholder="Ask something..."
//               />

//               <button
//                 type="submit"
//                 disabled={loading || !message.trim()}
//                 className="focus:outline-none bg-transparent p-0 m-0 border-none"
//               >
//                 <img
//                   src="/img.png"
//                   className="w-[55px] h-[80px] ml-[0px] mr-[10px] object-contain hover:scale-105 transition-transform duration-200"
//                   style={{ border: 'none', background: 'transparent', padding: 0, margin: 0, boxShadow: 'none' }}
//                 />
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;





// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const options = [
//   "International Money Transfer",
//   "Domestic Money Transfer",
//   "Foreign Exchange",
//   "Gold Loan Services",
//   "Tours & Travel Services",
//   "Utility & Bill Payments",
//   "Paul Merchants Franchise/Partner Program",
//   "Paul Pay App Support",
//   "KYC and Account Verification",
//   "Others"
// ];

// const greetingKeywords = ["hi", "hello", "hey", "good morning", "good evening", "good afternoon"];

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(false);
//   const [hasWelcomed, setHasWelcomed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     const storedId = localStorage.getItem("conversationId");
//     if (!storedId) {
//       const newId = Date.now().toString();
//       localStorage.setItem("conversationId", newId);
//       setConversationId(newId);
//     } else {
//       setConversationId(storedId);
//     }
//   }, []);

//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message.trim() === '') return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [
//       ...prevHistory,
//       { sender: 'user', text: message },
//     ]);

//     const messageLower = message.toLowerCase();
//     const isGreeting = greetingKeywords.some(keyword => messageLower.includes(keyword));

//     if (isGreeting && !hasWelcomed) {
//       setHasWelcomed(true);
//       setIsChatActive(false);
//       setMessage('');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message, role: 'user', conversation_id: conversationId }),
//       });

//       if (!response.ok) throw new Error('Error with API request');

//       const data = await response.json();
//       const newHistory = [
//         { sender: 'ai', text: data.response },
//       ];

//       setChatHistory((prev) => [...prev, ...newHistory]);
//       setMessage('');
//       setIsChatActive(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOptionClick = async (option) => {
//     if (option === "Others") {
//       // Restart conversation
//       const newId = Date.now().toString();
//       localStorage.setItem("conversationId", newId);
//       setConversationId(newId);
//       setChatHistory([]);
//       setMessage('');
//       setIsChatActive(true);
//       setHasWelcomed(true);
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           message: `Tell me about ${option}`,
//           role: 'user',
//           conversation_id: conversationId
//         })
//       });

//       const data = await response.json();
//       setChatHistory([{ sender: 'ai', text: data.response }]);
//       setIsChatActive(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center py-10 px-4">
//       <div className="w-full max-w-[650px] max-h-[95vh] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md ml-[10px]">
//             PaulBot 🤖
//           </h1>
//         </div>

//         {!isChatActive && hasWelcomed ? (
//           <>
//             <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">What do you want to know about?</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {options.map((option, idx) => (
//                 <div
//                   key={idx}
//                   className="option-box"
//                   onClick={() => handleOptionClick(option)}
//                   title={`Learn more about ${option}`}
//                 >
//                   {`${idx + 1}. ${option}`}
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <>
//             <div
//               ref={chatContainerRef}
//               className="overflow-y-auto flex-grow bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
//             >
//               {chatHistory.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
//                 >
//                   <div className={`${msg.sender === 'user' ? 'user-message' : 'ai-message'} chat-bubble`}>
//                     <p>{msg.text}</p>
//                   </div>
//                 </div>
//               ))}

//               {loading && (
//                 <div className="flex justify-start animate-pulse">
//                   <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
//                     AI is typing🤔
//                   </div>
//                 </div>
//               )}
//             </div>

//             <form
//               onSubmit={sendMessage}
//               className="mt-4 flex flex-row items-center gap-4 animate-fade-in"
//             >
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-grow px-10 py-10 ml-[10px] mr-[0px] rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner"
//                 placeholder="Ask something..."
//               />

//               <button
//                 type="submit"
//                 disabled={loading || !message.trim()}
//                 className="focus:outline-none bg-transparent p-0 m-0 border-none"
//               >
//                 <img
//                   src="/img.png"
//                   className="w-[55px] h-[80px] ml-[0px] mr-[10px] object-contain hover:scale-105 transition-transform duration-200"
//                   style={{ border: 'none', background: 'transparent', padding: 0, margin: 0, boxShadow: 'none' }}
//                   alt="Send"
//                 />
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;






// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const options = [
//   "PML Holidays!",
//   "FOREX",
//   "INSURANCE"
// ];

// const greetingKeywords = ["hi", "hello", "hey", "good morning", "good evening", "good afternoon"];

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(false);
//   const [hasWelcomed, setHasWelcomed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     const storedId = localStorage.getItem("conversationId");
//     if (!storedId) {
//       const newId = Date.now().toString();
//       localStorage.setItem("conversationId", newId);
//       setConversationId(newId);
//     } else {
//       setConversationId(storedId);
//     }
//   }, []);

//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message.trim() === '') return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [...prevHistory, { sender: 'user', text: message }]);

//     const messageLower = message.toLowerCase();
//     const isGreeting = greetingKeywords.some(keyword => messageLower.includes(keyword));

//     if (isGreeting && !hasWelcomed) {
//       setHasWelcomed(true);
//       setIsChatActive(false);
//       setMessage('');
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message, role: 'user', conversation_id: conversationId }),
//       });

//       if (!response.ok) throw new Error('Error with API request');

//       const data = await response.json();

//       // Update conversationId if changed by backend (e.g., after "others")
//       if (data.conversation_id && data.conversation_id !== conversationId) {
//         localStorage.setItem("conversationId", data.conversation_id);
//         setConversationId(data.conversation_id);
//       }

//       setChatHistory(prev => [...prev, { sender: 'ai', text: data.response }]);
//       setMessage('');
//       setIsChatActive(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOptionClick = async (option) => {
//     setLoading(true);
//     if (option === "Others") {
//       try {
//         const response = await fetch(`http://localhost:8000/chat/`, {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             message: "others",
//             role: "user",
//             conversation_id: conversationId
//           })
//         });

//         const data = await response.json();

//         // Update conversationId with new one from backend
//         localStorage.setItem("conversationId", data.conversation_id);
//         setConversationId(data.conversation_id);

//         setChatHistory([{ sender: 'ai', text: data.response }]);
//         setIsChatActive(true);
//         setHasWelcomed(true);
//         setMessage('');
//       } catch (error) {
//         console.error('Error:', error);
//       } finally {
//         setLoading(false);
//       }
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           message: `Tell me about ${option}`,
//           role: 'user',
//           conversation_id: conversationId
//         })
//       });

//       const data = await response.json();
//       setChatHistory([{ sender: 'ai', text: data.response }]);
//       setIsChatActive(true);
//       setMessage('');
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center py-10 px-4">
//       <div className="w-full max-w-[650px] max-h-[95vh] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md ml-[10px]">
//             PaulBot 🤖
//           </h1>
//         </div>

//         {!isChatActive && hasWelcomed ? (
//           <>
//             <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">What do you want to know about?</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {options.map((option, idx) => (
//                 <div
//                   key={idx}
//                   className="option-box"
//                   onClick={() => handleOptionClick(option)}
//                   title={`Learn more about ${option}`}
//                 >
//                   {`${idx + 1}. ${option}`}
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <>
//             <div
//               ref={chatContainerRef}
//               className="overflow-y-auto flex-grow bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
//             >
//               {chatHistory.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
//                 >
//                   <div className={`${msg.sender === 'user' ? 'user-message' : 'ai-message'} chat-bubble`}>
//                     <p>{msg.text}</p>
//                   </div>
//                 </div>
//               ))}

//               {loading && (
//                 <div className="flex justify-start animate-pulse">
//                   <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
//                     AI is typing🤔
//                   </div>
//                 </div>
//               )}
//             </div>

//             <form
//               onSubmit={sendMessage}
//               className="mt-4 flex flex-row items-center gap-4 animate-fade-in"
//             >
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-grow px-10 py-10 ml-[10px] mr-[0px] rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner"
//                 placeholder="Ask something..."
//               />

//               <button
//                 type="submit"
//                 disabled={loading || !message.trim()}
//                 className="focus:outline-none bg-transparent p-0 m-0 border-none"
//               >
//                 <img
//                   src="/img.png"
//                   className="w-[55px] h-[80px] ml-[0px] mr-[10px] object-contain hover:scale-105 transition-transform duration-200"
//                   style={{ border: 'none', background: 'transparent', padding: 0, margin: 0, boxShadow: 'none' }}
//                   alt="Send"
//                 />
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;








// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleOptionClick = async (option) => {
//     setLoading(true);
//     setChatHistory([...chatHistory, { sender: 'user', text: option }]);

//     if (option === "PML Holidays!") {
//       const pmlMessages = [
//         { sender: 'ai', text: "Welcome to PML Holidays! Get ready to create unforgettable memories!" },
//         { sender: 'ai', type: 'adventure-options' },
//         { sender: 'ai', type: 'package-links' },
//         { sender: 'ai', text: "If you don’t see what you’re looking for, click on your preferred choice and explore more options on our website: ", link: "https://example.com/pml-holidays" }
//       ];

//       setChatHistory((prev) => [...prev, ...pmlMessages]);
//       setIsChatActive(true);
//       setMessage('');
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch('https://paulbot-chatbot-backend.onrender.com/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ message: option })
//       });

//       const data = await response.json();

//       setChatHistory([...chatHistory, { sender: 'user', text: option }, { sender: 'ai', text: data.message }]);
//       setIsChatActive(true);
//       setMessage('');
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLoading(false);
//     }
//   };

//   const handleSendMessage = async () => {
//     if (!message.trim()) return;
//     setLoading(true);
//     setChatHistory([...chatHistory, { sender: 'user', text: message }]);

//     try {
//       const response = await fetch('https://paulbot-chatbot-backend.onrender.com/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ message })
//       });

//       const data = await response.json();

//       setChatHistory([...chatHistory, { sender: 'user', text: message }, { sender: 'ai', text: data.message }]);
//       setIsChatActive(true);
//       setMessage('');
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLoading(false);
//     }
//   };

//   const options = [
//     "PML Holidays!",
//     "FOREX",
//     "INSURANCE"
//   ];

//   const renderMessage = (entry, index) => {
//     if (entry.type === 'adventure-options') {
//       return (
//         <div key={index} className="ai-message adventure-options">
//           <p>Chatbot: What kind of adventure are you looking for? Select from the options below:</p>
//           <div className="adventure-grid">
//             <div className="option-box" title="Discover the world on your own terms!">✅ Solo Explorer</div>
//             <div className="option-box" title="Romantic getaways for just the two of you!">❤️ Couple Goals</div>
//             <div className="option-box" title="Fun-filled trips for all ages!">👨‍👩‍👧‍👦 Family Vacations</div>
//             <div className="option-box" title="Thrilling experiences with your besties!">🎒 BBF’s Trip Adventures</div>
//           </div>
//         </div>
//       );
//     }

//     if (entry.type === 'package-links') {
//       return (
//         <div key={index} className="ai-message package-section">
//           <p>Chatbot: Here are some of our most popular packages:</p>
//           <div className="package-grid">
//             <a href="https://example.com/tropical-escape" className="package-box" target="_blank" rel="noopener noreferrer">🌟 Package 1 - Tropical Escape</a>
//             <a href="https://example.com/mountain-retreat" className="package-box" target="_blank" rel="noopener noreferrer">🏔️ Package 2 - Mountain Retreat</a>
//             <a href="https://example.com/city-lights" className="package-box" target="_blank" rel="noopener noreferrer">🌆 Package 3 - City Lights & Luxury</a>
//           </div>
//         </div>
//       );
//     }

//     if (entry.link) {
//       return (
//         <div key={index} className="ai-message">
//           {entry.text} <a href={entry.link} target="_blank" rel="noopener noreferrer">PML Holidays Website</a>
//         </div>
//       );
//     }

//     return (
//       <div
//         key={index}
//         className={`message ${entry.sender === 'user' ? 'user-message' : 'ai-message'}`}
//       >
//         {entry.text}
//       </div>
//     );
//   };

//   return (
//     <div className="App">
//       <div className="chatbox">
//         <h1>PaulBot</h1>
//         <div className="chat-history">
//           {chatHistory.map((entry, index) => renderMessage(entry, index))}
//         </div>
//         <div className="input-section">
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Type your message..."
//           />
//           <button onClick={handleSendMessage} disabled={loading}>
//             {loading ? 'Sending...' : 'Send'}
//           </button>
//         </div>
//         <div className="options">
//           {options.map((option, index) => (
//             <button key={index} onClick={() => handleOptionClick(option)}>
//               {option}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;







// App.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const options = [
//   "PML Holidays!",
//   "FOREX",
//   "INSURANCE"
// ];

// // const greetingKeywords = ["hi", "hello", "hey", "good morning", "good evening", "good afternoon"];

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(false);
//   const [hasWelcomed, setHasWelcomed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);
//   const [selectedTopic, setSelectedTopic] = useState(null);
//   const [adventureOptions, setAdventureOptions] = useState([]);
//   const [packageOptions, setPackageOptions] = useState([]);
//   const [finalMessageShown, setFinalMessageShown] = useState(false);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     const storedId = localStorage.getItem("conversationId");
//     if (!storedId) {
//       const newId = Date.now().toString();
//       localStorage.setItem("conversationId", newId);
//       setConversationId(newId);
//     } else {
//       setConversationId(storedId);
//     }
//   }, []);

//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message.trim() === '') return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [...prevHistory, { sender: 'user', text: message }]);

//     const messageLower = message.toLowerCase();
//     // const isGreeting = greetingKeywords.some(keyword => messageLower.includes(keyword));

//     // if (isGreeting && !hasWelcomed) {
//     //   setHasWelcomed(true);
//     //   setIsChatActive(false);
//     //   setMessage('');
//     //   setLoading(false);
//     //   return;
//     // }

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message, role: 'user', conversation_id: conversationId }),
//       });

//       if (!response.ok) throw new Error('Error with API request');

//       const data = await response.json();

//       if (data.conversation_id && data.conversation_id !== conversationId) {
//         localStorage.setItem("conversationId", data.conversation_id);
//         setConversationId(data.conversation_id);
//       }

//       setChatHistory(prev => [...prev, { sender: 'ai', text: data.response }]);
//       setMessage('');
//       setIsChatActive(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOptionClick = async (option) => {
//     setLoading(true);

//     if (option === "PML Holidays!") {
//       setChatHistory([
//         { sender: 'ai', text: "Welcome to PML Holidays! Get ready to create unforgettable memories!" },
//         { sender: 'ai', text: "What kind of adventure are you looking for? Select from the options below:" }
//       ]);
//       setAdventureOptions([
//         { label: "Solo Explorer", hover: "Discover world on your own terms!" },
//         { label: "Couple Goals", hover: "Romantic trip for two of you!" },
//         { label: "Family Vacations", hover: "Fun-filled trips for all ages!" },
//         { label: "BBF’s Trip Adventures", hover: "Thrilling with besties!" }
//       ]);
//       setSelectedTopic("PML Holidays!");
//       setIsChatActive(true);
//       setHasWelcomed(true);
//       setMessage('');
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           message: `Tell me about ${option}`,
//           role: 'user',
//           conversation_id: conversationId
//         })
//       });

//       const data = await response.json();
//       setChatHistory([{ sender: 'ai', text: data.response }]);
//       setIsChatActive(true);
//       setMessage('');
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAdventureClick = (option) => {
//     setChatHistory(prev => [
//       ...prev,
//       { sender: 'user', text: option.label },
//       { sender: 'ai', text: "Here are some of our most popular packages:" }
//     ]);
//     setAdventureOptions([]);
//     setPackageOptions([
//       { label: "Tropical Escape", link: "https://pmlholidays.com/tropical" },
//       { label: "️Mountain Retreat", link: "https://pmlholidays.com/mountain" },
//       { label: "️City Lights & Luxury", link: "https://pmlholidays.com/cityluxury" }
//     ]);
//   };

//   const handlePackageClick = (link) => {
//     setChatHistory(prev => [
//       ...prev,
//       { sender: 'user', text: `Clicked on ${link}` },
//       {
//         sender: 'ai',
//         text: <p>
//           If you don’t see what you’re looking for, click on your preferred choice and explore more
//           options on our website:{' '}
//           <a href="https://pmlholidays.com" target="_blank" rel="noopener noreferrer">
//             PML Holidays Website
//           </a>. Our team will connect with you shortly to curate
//           the perfect trip for you!
//         </p>
        
//         // text: `If you don’t see what you’re looking for, click on your preferred choice and explore more\noptions on our website: [PML Holidays Website](https://pmlholidays.com). Our team will connect with you shortly to curate\nthe perfect trip for you!`,
//         // label: "️PML Holidays Website", link: "https://pmlholidays.com"
//       }
//     ]);
//     setPackageOptions([]);
//     setFinalMessageShown(true);
//   };

//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center py-10 px-4">
//       <div className="w-full max-w-[650px] max-h-[95vh] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md ml-[10px]">
//             PaulBot 🤖
//           </h1>
//         </div>

//         {!isChatActive && hasWelcomed ? (
//           <>
//             <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">What do you want to know about?</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {options.map((option, idx) => (
//                 <div
//                   key={idx}
//                   className="option-box"
//                   onClick={() => handleOptionClick(option)}
//                   title={`Learn more about ${option}`}
//                 >
//                   {`${idx + 1}. ${option}`}
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <>
//             <div
//               ref={chatContainerRef}
//               className="overflow-y-auto flex-grow bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
//             >
//               {chatHistory.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
//                 >
//                   <div className={`${msg.sender === 'user' ? 'user-message' : 'ai-message'} chat-bubble`}>
//                     <p>{msg.text}</p>
//                   </div>
//                 </div>
//               ))}

//               {loading && (
//                 <div className="flex justify-start animate-pulse">
//                   <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
//                     AI is typing🤔
//                   </div>
//                 </div>
//               )}
//             </div>

//             {adventureOptions.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {adventureOptions.map((opt, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box group relative"
//                     title={opt.hover}
//                     onClick={() => handleAdventureClick(opt)}
//                   >
//                     {opt.label}
//                     <span className="absolute z-10 top-full mt-1 text-xs text-gray-300 opacity-0 group-hover:opacity-100">
//                       {opt.hover}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {packageOptions.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {packageOptions.map((pkg, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box"
//                     onClick={() => handlePackageClick(pkg.link)}
//                   >
//                     <a href={pkg.link} target="_blank" rel="noopener noreferrer">{pkg.label}</a>
//                   </div>
//                 ))}
//               </div>
//             )}

//             <form
//               onSubmit={sendMessage}
//               className="mt-4 flex flex-row items-center gap-4 animate-fade-in"
//             >
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-grow px-10 py-10 ml-[10px] mr-[0px] rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner"
//                 placeholder="Ask something..."
//               />

//               <button
//                 type="submit"
//                 disabled={loading || !message.trim()}
//                 className="focus:outline-none bg-transparent p-0 m-0 border-none"
//               >
//                 <img
//                   src="/img.png"
//                   className="w-[55px] h-[80px] ml-[0px] mr-[10px] object-contain hover:scale-105 transition-transform duration-200"
//                   style={{ border: 'none', background: 'transparent', padding: 0, margin: 0, boxShadow: 'none' }}
//                   alt="Send"
//                 />
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;








// App.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const options = [
//   "PML Holidays!",
//   "FOREX",
//   "INSURANCE"
// ];

// const languages = ["English", "Hindi"];

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(false);
//   const [hasWelcomed, setHasWelcomed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);
//   const [selectedTopic, setSelectedTopic] = useState(null);
//   const [adventureOptions, setAdventureOptions] = useState([]);
//   const [packageOptions, setPackageOptions] = useState([]);
//   const [finalMessageShown, setFinalMessageShown] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState(null);
//   const [userName, setUserName] = useState('');
//   const [nameEntered, setNameEntered] = useState(false);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     const storedId = localStorage.getItem("conversationId");
//     if (!storedId) {
//       const newId = Date.now().toString();
//       localStorage.setItem("conversationId", newId);
//       setConversationId(newId);
//     } else {
//       setConversationId(storedId);
//     }
//   }, []);

//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message.trim() === '') return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [...prevHistory, { sender: 'user', text: message }]);

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message, role: 'user', conversation_id: conversationId }),
//       });

//       if (!response.ok) throw new Error('Error with API request');

//       const data = await response.json();

//       if (data.conversation_id && data.conversation_id !== conversationId) {
//         localStorage.setItem("conversationId", data.conversation_id);
//         setConversationId(data.conversation_id);
//       }

//       setChatHistory(prev => [...prev, { sender: 'ai', text: data.response }]);
//       setMessage('');
//       setIsChatActive(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOptionClick = async (option) => {
//     setLoading(true);

//     if (option === "PML Holidays!") {
//       setChatHistory([
//         { sender: 'ai', text: "Welcome to PML Holidays! Get ready to create unforgettable memories!" },
//         { sender: 'ai', text: "What kind of adventure are you looking for? Select from the options below:" }
//       ]);
//       setAdventureOptions([
//         { label: "Solo Explorer", hover: "Discover world on your own terms!" },
//         { label: "Couple Goals", hover: "Romantic trip for two of you!" },
//         { label: "Family Vacations", hover: "Fun-filled trips for all ages!" },
//         { label: "BBF’s Trip Adventures", hover: "Thrilling with besties!" }
//       ]);
//       setSelectedTopic("PML Holidays!");
//       setIsChatActive(true);
//       setHasWelcomed(true);
//       setMessage('');
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           message: `Tell me about ${option}`,
//           role: 'user',
//           conversation_id: conversationId
//         })
//       });

//       const data = await response.json();
//       setChatHistory([{ sender: 'ai', text: data.response }]);
//       setIsChatActive(true);
//       setMessage('');
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAdventureClick = (option) => {
//     setChatHistory(prev => [
//       ...prev,
//       { sender: 'user', text: option.label },
//       { sender: 'ai', text: "Here are some of our most popular packages:" }
//     ]);
//     setAdventureOptions([]);
//     setPackageOptions([
//       { label: "Tropical Escape", link: "https://pmlholidays.com/tropical" },
//       { label: "️Mountain Retreat", link: "https://pmlholidays.com/mountain" },
//       { label: "️City Lights & Luxury", link: "https://pmlholidays.com/cityluxury" }
//     ]);
//   };

//   const handlePackageClick = (link) => {
//     setChatHistory(prev => [
//       ...prev,
//       { sender: 'user', text: `Clicked on ${link}` },
//       {
//         sender: 'ai',
//         text: <p>
//           If you don’t see what you’re looking for, click on your preferred choice and explore more
//           options on our website:{' '}
//           <a href="https://pmlholidays.com" target="_blank" rel="noopener noreferrer">
//             PML Holidays Website
//           </a>. Our team will connect with you shortly to curate
//           the perfect trip for you!
//         </p>
//       }
//     ]);
//     setPackageOptions([]);
//     setFinalMessageShown(true);
//   };

//   const handleLanguageSelect = (lang) => {
//     setSelectedLanguage(lang);
//   };

//   const handleNameSubmit = (e) => {
//     e.preventDefault();
//     if (userName.trim()) {
//       setNameEntered(true);
//       setHasWelcomed(true);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center py-10 px-4">
//       <div className="w-full max-w-[450px] h-[calc(100vh-4rem)] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md ml-[10px]">
//             PaulBot 🤖
//           </h1>
//         </div>

//         {!selectedLanguage ? (
//           <>
//             <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">Hi, Welcome to Paul Merchants. Choose the language:</h2>
//             <div className="grid grid-cols-2 gap-4 mx-6">
//               {languages.map((lang, idx) => (
//                 <div
//                   key={idx}
//                   className="option-box"
//                   onClick={() => handleLanguageSelect(lang)}
//                 >
//                   {lang}
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : !nameEntered ? (
//           <form onSubmit={handleNameSubmit} className="flex flex-col items-center space-y-4">
//             <input
//               type="text"
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//               placeholder="Enter your name"
//               className="px-6 py-4 rounded-2xl bg-zinc-800 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner w-500px ml-[10px] mr-[10px] mb-[10px]"
//             />
//             <button type="submit" className="option-box ml-[10px] mr-[10px] w-250px">Submit</button>
//           </form>
//         ) : !isChatActive && hasWelcomed ? (
//           <>
//             <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">What do you want to know about?</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {options.map((option, idx) => (
//                 <div
//                   key={idx}
//                   className="option-box"
//                   onClick={() => handleOptionClick(option)}
//                   title={`Learn more about ${option}`}
//                 >
//                   {`${idx + 1}. ${option}`}
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <>
//             <div
//               ref={chatContainerRef}
//               className="overflow-y-auto flex-grow bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
//             >
//               {chatHistory.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
//                 >
//                   <div className={`${msg.sender === 'user' ? 'user-message' : 'ai-message'} chat-bubble`}>
//                     <p>{msg.text}</p>
//                   </div>
//                 </div>
//               ))}

//               {loading && (
//                 <div className="flex justify-start animate-pulse">
//                   <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
//                     AI is typing🤔
//                   </div>
//                 </div>
//               )}
//             </div>

//             {adventureOptions.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {adventureOptions.map((opt, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box group relative"
//                     title={opt.hover}
//                     onClick={() => handleAdventureClick(opt)}
//                   >
//                     {opt.label}
//                     <span className="absolute z-10 top-full mt-1 text-xs text-gray-300 opacity-0 group-hover:opacity-100">
//                       {opt.hover}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {packageOptions.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {packageOptions.map((pkg, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box"
//                     onClick={() => handlePackageClick(pkg.link)}
//                   >
//                     <a href={pkg.link} target="_blank" rel="noopener noreferrer">{pkg.label}</a>
//                   </div>
//                 ))}
//               </div>
//             )}

//             <form
//               onSubmit={sendMessage}
//               className="mt-4 flex flex-row items-center gap-4 animate-fade-in"
//             >
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-grow px-10 py-10 ml-[10px] mr-[0px] rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner"
//                 placeholder="Ask something..."
//               />

//               <button
//                 type="submit"
//                 disabled={loading || !message.trim()}
//                 className="focus:outline-none bg-transparent p-0 m-0 border-none"
//               >
//                 <img
//                   src="/img.png"
//                   className="w-[55px] h-[80px] ml-[0px] mr-[10px] object-contain hover:scale-105 transition-transform duration-200"
//                   style={{ border: 'none', background: 'transparent', padding: 0, margin: 0, boxShadow: 'none' }}
//                   alt="Send"
//                 />
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;








// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const options = [
//   "PML Holidays!",
//   "FOREX",
//   // "INSURANCE"
// ];

// const languages = ["English", "Hindi"];
// const serviceablePincodes = ['110001', '400001', '560001']; // mock DB serviceable pincodes


// const App = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(false);
//   const [hasWelcomed, setHasWelcomed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);
//   const [selectedTopic, setSelectedTopic] = useState(null);
//   const [adventureOptions, setAdventureOptions] = useState([]);
//   const [packageOptions, setPackageOptions] = useState([]);
//   const [finalMessageShown, setFinalMessageShown] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState(null);
//   const [userName, setUserName] = useState('');
//   const [nameEntered, setNameEntered] = useState(false);
//   const [forexStep, setForexStep] = useState(null);
//   const [forexCurrencyOptions, setForexCurrencyOptions] = useState([]);
//   const [forexPincodePrompt, setForexPincodePrompt] = useState(false);
//   const [pincode, setPincode] = useState('');

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     const storedId = localStorage.getItem("conversationId");
//     if (!storedId) {
//       const newId = Date.now().toString();
//       localStorage.setItem("conversationId", newId);
//       setConversationId(newId);
//     } else {
//       setConversationId(storedId);
//     }
//   }, []);

//   const handleOptionClick = async (option) => {
//     setLoading(true);
//     if (option === "FOREX") {
//       setChatHistory([
//         { sender: 'ai', text: "Welcome to PML Forex! 💱 How can we assist you today?" },
//         { sender: 'ai', text: "Would you like to:" }
//       ]);
//       setAdventureOptions([
//         { label: "Buy currency" },
//         { label: "Sell currency" },
//         { label: "Send money abroad" }
//       ]);
//       setSelectedTopic("FOREX");
//       setIsChatActive(true);
//       setHasWelcomed(true);
//       setLoading(false);
//       return;
//     }

//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message.trim() === '') return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [...prevHistory, { sender: 'user', text: message }]);

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message, role: 'user', conversation_id: conversationId }),
//       });

//       if (!response.ok) throw new Error('Error with API request');

//       const data = await response.json();

//       if (data.conversation_id && data.conversation_id !== conversationId) {
//         localStorage.setItem("conversationId", data.conversation_id);
//         setConversationId(data.conversation_id);
//       }

//       setChatHistory(prev => [...prev, { sender: 'ai', text: data.response }]);
//       setMessage('');
//       setIsChatActive(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOptionClick = async (option) => {
//     setLoading(true);

//     if (option === "PML Holidays!") {
//       setChatHistory([
//         { sender: 'ai', text: "Welcome to PML Holidays! Get ready to create unforgettable memories!" },
//         { sender: 'ai', text: "What kind of adventure are you looking for? Select from the options below:" }
//       ]);
//       setAdventureOptions([
//         { label: "Solo Explorer", hover: "Discover world on your own terms!" },
//         { label: "Couple Goals", hover: "Romantic trip for two of you!" },
//         { label: "Family Vacations", hover: "Fun-filled trips for all ages!" },
//         { label: "BBF’s Trip Adventures", hover: "Thrilling with besties!" }
//       ]);
//       setSelectedTopic("PML Holidays!");
//       setIsChatActive(true);
//       setHasWelcomed(true);
//       setMessage('');
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8000/chat/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           message: `Tell me about ${option}`,
//           role: 'user',
//           conversation_id: conversationId
//         })
//       });

//       const data = await response.json();
//       setChatHistory([{ sender: 'ai', text: data.response }]);
//       setIsChatActive(true);
//       setMessage('');
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAdventureClick = (option) => {
//     setChatHistory(prev => [
//       ...prev,
//       { sender: 'user', text: option.label },
//       { sender: 'ai', text: "Here are some of our most popular packages:" }
//     ]);
//     setAdventureOptions([]);
//     setPackageOptions([
//       { label: "Tropical Escape", link: "https://pmlholidays.com/tropical" },
//       { label: "️Mountain Retreat", link: "https://pmlholidays.com/mountain" },
//       { label: "️City Lights & Luxury", link: "https://pmlholidays.com/cityluxury" }
//     ]);
//   };

//   const handlePackageClick = (link) => {
//     setChatHistory(prev => [
//       ...prev,
//       { sender: 'user', text: `Clicked on ${link}` },
//       {
//         sender: 'ai',
//         text: <p>
//           If you don’t see what you’re looking for, click on your preferred choice and explore more
//           options on our website:{' '}
//           <a href="https://pmlholidays.com" target="_blank" rel="noopener noreferrer">
//             PML Holidays Website
//           </a>. Our team will connect with you shortly to curate
//           the perfect trip for you!
//         </p>
//       }
//     ]);
//     setPackageOptions([]);
//     setFinalMessageShown(true);
//   };

//   const handleLanguageSelect = (lang) => {
//     setSelectedLanguage(lang);
//   };

//   const handleNameSubmit = (e) => {
//     e.preventDefault();
//     if (userName.trim()) {
//       setNameEntered(true);
//       setHasWelcomed(true);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center py-10 px-4">
//       <div className="w-full max-w-[450px] h-[calc(100vh-4rem)] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md ml-[10px]">
//             PaulBot 🤖
//           </h1>
//         </div>

//         {!selectedLanguage ? (
//           <>
//             <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">Hi, Welcome to Paul Merchants. Choose the language:</h2>
//             <div className="grid grid-cols-2 gap-4 mx-6">
//               {languages.map((lang, idx) => (
//                 <div
//                   key={idx}
//                   className="option-box"
//                   onClick={() => handleLanguageSelect(lang)}
//                 >
//                   {lang}
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : !nameEntered ? (
//           <form onSubmit={handleNameSubmit} className="flex flex-col items-center space-y-4">
//             <input
//               type="text"
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//               placeholder="Enter your name"
//               className="px-6 py-4 rounded-2xl bg-zinc-800 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner w-500px ml-[10px] mr-[10px] mb-[10px]"
//             />
//             <button type="submit" className="option-box ml-[10px] mr-[10px] w-250px">Submit</button>
//           </form>
//         ) : !isChatActive && hasWelcomed ? (
//           <>
//             <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">What do you want to know about?</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {options.map((option, idx) => (
//                 <div
//                   key={idx}
//                   className="option-box"
//                   onClick={() => handleOptionClick(option)}
//                   title={`Learn more about ${option}`}
//                 >
//                   {`${idx + 1}. ${option}`}
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <>
//             <div
//               ref={chatContainerRef}
//               className="overflow-y-auto flex-grow bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
//             >
//               {chatHistory.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
//                 >
//                   <div className={`${msg.sender === 'user' ? 'user-message' : 'ai-message'} chat-bubble`}>
//                     <p>{msg.text}</p>
//                   </div>
//                 </div>
//               ))}

//               {loading && (
//                 <div className="flex justify-start animate-pulse">
//                   <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
//                     AI is typing🤔
//                   </div>
//                 </div>
//               )}
//             </div>

//             {adventureOptions.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {adventureOptions.map((opt, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box group relative"
//                     title={opt.hover}
//                     onClick={() => handleAdventureClick(opt)}
//                   >
//                     {opt.label}
//                     <span className="absolute z-10 top-full mt-1 text-xs text-gray-300 opacity-0 group-hover:opacity-100">
//                       {opt.hover}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {packageOptions.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {packageOptions.map((pkg, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box"
//                     onClick={() => handlePackageClick(pkg.link)}
//                   >
//                     <a href={pkg.link} target="_blank" rel="noopener noreferrer">{pkg.label}</a>
//                   </div>
//                 ))}
//               </div>
//             )}

//             <form
//               onSubmit={sendMessage}
//               className="mt-4 flex flex-row items-center gap-4 animate-fade-in"
//             >
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-grow px-10 py-10 ml-[10px] mr-[0px] rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner"
//                 placeholder="Ask something..."
//               />

//               <button
//                 type="submit"
//                 disabled={loading || !message.trim()}
//                 className="focus:outline-none bg-transparent p-0 m-0 border-none"
//               >
//                 <img
//                   src="/img.png"
//                   className="w-[55px] h-[80px] ml-[0px] mr-[10px] object-contain hover:scale-105 transition-transform duration-200"
//                   style={{ border: 'none', background: 'transparent', padding: 0, margin: 0, boxShadow: 'none' }}
//                   alt="Send"
//                 />
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;








// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const options = [
//   "PML Holidays!",
//   "FOREX"
//   // "INSURANCE"
// ];

// const languages = ["English", "Hindi"];

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(false);
//   const [hasWelcomed, setHasWelcomed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);
//   const [selectedTopic, setSelectedTopic] = useState(null);
//   const [adventureOptions, setAdventureOptions] = useState([]);
//   const [packageOptions, setPackageOptions] = useState([]);
//   const [finalMessageShown, setFinalMessageShown] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState(null);
//   const [userName, setUserName] = useState('');
//   const [nameEntered, setNameEntered] = useState(false);
//   const [forexOptions, setForexOptions] = useState([]);
//   const [currencyOptions, setCurrencyOptions] = useState([]);
//   const [remittanceOptions, setRemittanceOptions] = useState([]);
//   const [showPincodeInput, setShowPincodeInput] = useState(false);
//   const [selectedForexOption, setSelectedForexOption] = useState(null);

// // ⬇️ Place it here, after imports but before your component starts
// // const logInteraction = async (eventType, data) => {
// //   try {
// //     await fetch('http://localhost:8000/log-interaction/', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({
// //         conversation_id: conversationId,  // Ensure this variable is available in scope
// //         user_name: userName,              // Same for userName
// //         event_type: eventType,
// //         metadata: data,
// //         timestamp: new Date().toISOString()
// //       }),
// //     });
// //   } catch (error) {
// //     console.error("Error logging interaction:", error);
// //   }
// // };

// const logInteraction = async (eventType, data) => {
//   try {
//     const timestamp = new Date().toISOString();
//     await fetch('http://localhost:8000/log-interaction/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         conversation_id: conversationId,
//         user_name: userName,
//         event_type: eventType,
//         metadata: data,
//         timestamp: timestamp
//       }),
//     });
    
//     // Also send email for important events
//     if (['click', 'submit', 'hover'].includes(eventType)) {
//       await fetch('http://localhost:8000/send-email/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           conversation_id: conversationId,
//           recipient: "aasthaarya2004@gmail.com",
//           event_type: eventType,
//           metadata: data
//         }),
//       });
//     }
//   } catch (error) {
//     console.error("Error logging interaction:", error);
//   }
// };

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     const storedId = localStorage.getItem("conversationId");
//     if (!storedId) {
//       const newId = Date.now().toString();
//       localStorage.setItem("conversationId", newId);
//       setConversationId(newId);
//     } else {
//       setConversationId(storedId);
//     }
//   }, []);

//   useEffect(() => {
//     return () => {
//       // When component unmounts, send the full conversation log
//       if (chatHistory.length > 0) {
//         fetch('http://localhost:8000/send-email-summary/', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             conversation_id: conversationId,
//             recipient: "aasthaarya2004@gmail.com"
//           }),
//         });
//       }
//     };
//   }, [chatHistory, conversationId]);

//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message.trim() === '') return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [...prevHistory, { sender: 'user', text: message }]);

//     try {
//       const response = await fetch('http://localhost:8000/chat/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message, role: 'user', conversation_id: conversationId }),
//       });

//       if (!response.ok) throw new Error('Error with API request');

//       const data = await response.json();

//       if (data.conversation_id && data.conversation_id !== conversationId) {
//         localStorage.setItem("conversationId", data.conversation_id);
//         setConversationId(data.conversation_id);
//       }

//       setChatHistory(prev => [...prev, { sender: 'ai', text: data.response }]);
//       setMessage('');
//       setIsChatActive(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOptionClick = async (option) => {
//     await logInteraction("click", { topic: option });
//     setLoading(true);

//     if (option === "PML Holidays!") {
//       setChatHistory([
//         { sender: 'ai', text: "Welcome to PML Holidays! Get ready to create unforgettable memories!" },
//         { sender: 'ai', text: "What kind of adventure are you looking for? Select from the options below:" }
//       ]);
//       setAdventureOptions([
//         { label: "Solo Explorer", hover: "Discover world by own" },
//         { label: "Couple Goals", hover: "Romantic trip for two of you!" },
//         { label: "Family Vacations", hover: "Fun-filled trips for all ages!" },
//         { label: "BBF's Trip Adventures", hover: "Thrilling with besties!" }
//       ]);
//       setSelectedTopic("PML Holidays!");
//       setIsChatActive(true);
//       setHasWelcomed(true);
//       setMessage('');
//       setLoading(false);
//       return;
//     }

//     if (option === "FOREX") {
//       setChatHistory([
//         { sender: 'ai', text: "Welcome to PML Forex! 💱 How can we assist you today?" },
//         { sender: 'ai', text: "Would you like to:" }
//       ]);
//       setForexOptions([
//         { label: "Buy currency", value: "buy" },
//         { label: "Sell currency", value: "sell" },
//         { label: "Send money abroad", value: "remittance" }
//       ]);
//       setSelectedTopic("FOREX");
//       setIsChatActive(true);
//       setHasWelcomed(true);
//       setMessage('');
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:8000/chat/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           message: `Tell me about ${option}`,
//           role: 'user',
//           conversation_id: conversationId
//         })
//       });

//       const data = await response.json();
//       setChatHistory([{ sender: 'ai', text: data.response }]);
//       setIsChatActive(true);
//       setMessage('');
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAdventureClick = (option) => {
//     setChatHistory(prev => [
//       ...prev,
//       { sender: 'user', text: option.label },
//       { sender: 'ai', text: "Here are some of our most popular packages:" }
//     ]);
//     setAdventureOptions([]);
//     setPackageOptions([
//       { label: "Tropical Escape", link: "https://pmlholidays.com/tropical" },
//       { label: "️Mountain Retreat", link: "https://pmlholidays.com/mountain" },
//       { label: "️City Lights & Luxury", link: "https://pmlholidays.com/cityluxury" }
//     ]);
//   };

//   const handlePackageClick = (link) => {
//     setChatHistory(prev => [
//       ...prev,
//       { sender: 'user', text: `Clicked on ${link}` },
//       {
//         sender: 'ai',
//         text: <p>
//           If you don't see what you're looking for, click on your preferred choice and explore more
//           options on our website:{' '}
//           <a href="https://pmlholidays.com" target="_blank" rel="noopener noreferrer">
//             PML Holidays Website
//           </a>. Our team will connect with you shortly to curate
//           the perfect trip for you!
//         </p>
//       }
//     ]);
//     setPackageOptions([]);
//     setFinalMessageShown(true);
//   };

//   const handleForexOptionClick = (option) => {
//     setSelectedForexOption(option.value);
    
//     if (option.value === "remittance") {
//       setChatHistory(prev => [
//         ...prev,
//         { sender: 'user', text: option.label },
//         { sender: 'ai', text: "Please select the type of remittance:" }
//       ]);
//       setRemittanceOptions([
//         { label: "Inward Remittance", value: "inward" },
//         { label: "Outward Remittance", value: "outward" }
//       ]);
//       setForexOptions([]);
//     } else {
//       setChatHistory(prev => [
//         ...prev,
//         { sender: 'user', text: option.label },
//         { sender: 'ai', text: "Select which Currency you want to buy or sell:" }
//       ]);
//       setCurrencyOptions([
//         { label: "USD", value: "USD" },
//         { label: "Euro", value: "EUR" },
//         { label: "CAD", value: "CAD" },
//         { label: "GBP", value: "GBP" }
//       ]);
//       setForexOptions([]);
//     }
//   };

//   const handleRemittanceOptionClick = (option) => {
//     setChatHistory(prev => [
//       ...prev,
//       { sender: 'user', text: option.label },
//       { sender: 'ai', text: "Select which Currency you want to send:" }
//     ]);
//     setCurrencyOptions([
//       { label: "USD", value: "USD" },
//       { label: "Euro", value: "EUR" },
//       { label: "CAD", value: "CAD" },
//       { label: "GBP", value: "GBP" }
//     ]);
//     setRemittanceOptions([]);
//   };

//   const handleCurrencyClick = (currency) => {
//     setChatHistory(prev => [
//       ...prev,
//       { sender: 'user', text: currency.label },
//       { sender: 'ai', text: "Enter your pin code:" }
//     ]);
//     setCurrencyOptions([]);
//     setShowPincodeInput(true);
//   };

// const handlePincodeSubmit = async (e) => {
//   e.preventDefault();
//   const pincode = message.trim();
  
//   if (!pincode) {
//     setChatHistory(prev => [
//       ...prev,
//       { sender: 'ai', text: "Please enter a valid pincode." }
//     ]);
//     return;
//   }

//   setLoading(true);
//   setChatHistory(prev => [...prev, { sender: 'user', text: pincode }]);
  
//   try {
//     const serviceablePincodes = [
//       "380008", "380015", "380009", "143102", "133001", 
//       "143001", "144505", "143505", "142038", "176219", 
//       "151001", "176077", "462011", "148101", "151011", 
//       "160022", "682025", "144205", "176219", "176219", 
//       "151203", "152001", "144207", "122001", "144527", 
//       "143521", "146001", "146001", "500029", "452001", 
//       "142026", "302001", "180002", "144066", "141401", 
//       "132001", "175005", "136118", "141002", "194101", 
//       "144401", "226001", "146105", "175131", "160062", 
//       "142001", "400099", "144040", "110001", "387001", 
//       "110015", "144514", "136128", "144410", "144401", 
//       "145001", "147001", "360005", "140001", "335001", 
//       "174401", "141104", "395007", "144203", "143401", 
//       "174303", "144422", "390007", "140606"
//     ];

//     const isServiceable = serviceablePincodes.includes(pincode);
    
//     if (isServiceable) {
//       setChatHistory(prev => [
//         ...prev,
//         { sender: 'ai', text: "Thank you! We will contact you shortly." }
//       ]);
//     } else {
//       setChatHistory(prev => [
//         ...prev,
//         { 
//           sender: 'ai', 
//           text: (
//             <p>
//               We're sorry, but our Forex services are not available in your location at the moment. However,
//               we'd love to assist you with Travel or Insurance services. Check them out here:{' '}
//               <a 
//                 href="https://www.paulmerchants.net/" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-blue-400 hover:underline"
//               >
//                 Paul Merchants Website
//               </a>
//             </p>
//           )
//         }
//       ]);
//     }
//   } catch (error) {
//     console.error("Error checking pincode:", error);
//     setChatHistory(prev => [
//       ...prev,
//       { sender: 'ai', text: "There was an error processing your request. Please try again later." }
//     ]);
//   } finally {
//     setMessage('');
//     setLoading(false);
//     setShowPincodeInput(false);
//   }
// };

//   const checkPincodeServiceability = async (pincode) => {
//     // This is a mock function - in a real app, you would call your backend API
//     // For demo purposes, we'll consider pincodes starting with 1-4 as serviceable
//     return new Promise(resolve => {
//       setTimeout(() => {
//         const firstDigit = parseInt(pincode.charAt(0));
//         resolve(firstDigit >= 1 && firstDigit <= 4);
//       }, 1000);
//     });
//   };

// const handleLanguageSelect = (lang) => {
//   setSelectedLanguage(lang);
//   logInteraction("language_selected", { language: lang });
// };

//   const handleNameSubmit = (e) => {
//     e.preventDefault();
//     if (userName.trim()) {
//       logInteraction("name_submitted", { name: userName });
//       setNameEntered(true);
//       setHasWelcomed(true);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center py-10 px-4">
//       <div className="w-full max-w-[450px] h-[calc(100vh-4rem)] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md ml-[10px]">
//             PaulBot 🤖
//           </h1>
//         </div>

//         {!selectedLanguage ? (
//           <>
//             <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">Hi, Welcome to Paul Merchants. Choose the language:</h2>
//             <div className="grid grid-cols-2 gap-4 mx-6">
//               {languages.map((lang, idx) => (
//                 <div
//                   key={idx}
//                   className="option-box"
//                   onClick={() => handleLanguageSelect(lang)}
//                 >
//                   {lang}
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : !nameEntered ? (
//           <form onSubmit={handleNameSubmit} className="flex flex-col items-center space-y-4">
//             <input
//               type="text"
//               value={userName}
//               onChange={(e) => {
//                 const value = e.target.value;
//                     if (/^[a-zA-Z\s]*$/.test(value)) {
//                       setUserName(value);
//                               }
//                             }}
//               placeholder="Enter your name"
//               className="px-6 py-4 rounded-2xl bg-zinc-800 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner w-500px ml-[10px] mr-[10px] mb-[10px]"
//             />
//             <button type="submit" className="option-box ml-[10px] mr-[10px] w-250px">Submit</button>
//           </form>
//         ) : !isChatActive && hasWelcomed ? (
//           <>
//             <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">What do you want to know about?</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {options.map((option, idx) => (
//                 <div
//                   key={idx}
//                   className="option-box"
//                   onClick={() => handleOptionClick(option)}
//                   title={`Learn more about ${option}`}
//                 >
//                   {`${idx + 1}. ${option}`}
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <>
//             <div
//               ref={chatContainerRef}
//               className="overflow-y-auto flex-grow bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
//             >
//               {chatHistory.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
//                 >
//                   <div className={`${msg.sender === 'user' ? 'user-message' : 'ai-message'} chat-bubble`}>
//                     <p>{msg.text}</p>
//                   </div>
//                 </div>
//               ))}

//               {loading && (
//                 <div className="flex justify-start animate-pulse">
//                   <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
//                     AI is typing🤔
//                   </div>
//                 </div>
//               )}
//             </div>

//             {adventureOptions.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {adventureOptions.map((opt, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box group relative"
//                     title={opt.hover}
//                     onClick={() => handleAdventureClick(opt)}
//                   >
//                     {opt.label}
//                     <span
//                       onMouseEnter={() => logInteraction("hover", { label: opt.label, hoverText: opt.hover })}
//                       className="absolute z-10 top-full mt-1 text-xs text-gray-300 opacity-0 group-hover:opacity-100"
//                     >
//                       {opt.hover}
//                     </span>

//                   </div>
//                 ))}
//               </div>
//             )}

//             {packageOptions.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {packageOptions.map((pkg, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box"
//                     onClick={() => handlePackageClick(pkg.link)}
//                   >
//                     <a href={pkg.link} target="_blank" rel="noopener noreferrer">{pkg.label}</a>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {forexOptions.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {forexOptions.map((opt, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box"
//                     onClick={() => handleForexOptionClick(opt)}
//                   >
//                     {opt.label}
//                   </div>
//                 ))}
//               </div>
//             )}

//             {remittanceOptions.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {remittanceOptions.map((opt, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box"
//                     onClick={() => handleRemittanceOptionClick(opt)}
//                   >
//                     {opt.label}
//                   </div>
//                 ))}
//               </div>
//             )}

//             {currencyOptions.length > 0 && (
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-4">
//                 {currencyOptions.map((curr, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box"
//                     onClick={() => handleCurrencyClick(curr)}
//                   >
//                     {curr.label}
//                   </div>
//                 ))}
//               </div>
//             )}

//             <form
//               onSubmit={showPincodeInput ? handlePincodeSubmit : sendMessage}
//               className="mt-4 flex flex-row items-center gap-4 animate-fade-in"
//             >
//               <input
//                 type={showPincodeInput ? "number" : "text"}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-grow px-10 py-10 ml-[10px] mr-[0px] rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner"
//                 placeholder={showPincodeInput ? "Enter your pincode" : "Ask something..."}
//               />

//               <button
//                 type="submit"
//                 disabled={loading || !message.trim()}
//                 className="focus:outline-none bg-transparent p-0 m-0 border-none"
//               >
//                 <img
//                   src="/img.png"
//                   className="w-[55px] h-[80px] ml-[0px] mr-[10px] object-contain hover:scale-105 transition-transform duration-200"
//                   style={{ border: 'none', background: 'transparent', padding: 0, margin: 0, boxShadow: 'none' }}
//                   alt="Send"
//                 />
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;







// MODIFIED 

// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const options = [
//   "PML Holidays!",
//   "FOREX"
//   // "INSURANCE"
// ];

// const languages = ["English", "Hindi"];

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(false);
//   const [hasWelcomed, setHasWelcomed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [conversationId, setConversationId] = useState(null);
//   const chatContainerRef = useRef(null);
//   const [selectedTopic, setSelectedTopic] = useState(null);
//   const [adventureOptions, setAdventureOptions] = useState([]);
//   const [packageOptions, setPackageOptions] = useState([]);
//   const [finalMessageShown, setFinalMessageShown] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState(null);
//   const [userName, setUserName] = useState('');
//   const [nameEntered, setNameEntered] = useState(false);
//   const [userMobile, setUserMobile] = useState('');
//   const [forexOptions, setForexOptions] = useState([]);
//   const [currencyOptions, setCurrencyOptions] = useState([]);
//   const [remittanceOptions, setRemittanceOptions] = useState([]);
//   const [showPincodeInput, setShowPincodeInput] = useState(false);
//   const [selectedForexOption, setSelectedForexOption] = useState(null);
  

//   const logInteraction = async (eventType, data) => {
//     try {
//       const timestamp = new Date().toISOString();
//       await fetch('http://localhost:8000/log-interaction/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           conversation_id: conversationId,
//           user_name: userName,
//           mobile_number: userMobile,
//           event_type: eventType,
//           metadata: data,
//           timestamp: timestamp
//         }),
//       });
      
//       // Also send email for important events
//       // if (['click', 'submit', 'hover'].includes(eventType)) {
//       //   await fetch('http://localhost:8000/send-email/', {
//       //     method: 'POST',
//       //     headers: { 
//       //       'Content-Type': 'application/json',
//       //       'Accept': 'application/json'
//       //     },
//       //     body: JSON.stringify({
//       //       conversation_id: conversationId,
//       //       recipient: "aasthaarya2004@gmail.com",
//       //       event_data: {
//       //         event_type: eventType,
//       //         ...data
//       //       }
//       //     }),
//       //   });
//       // }
//     } catch (error) {
//       console.error("Error logging interaction:", error);
//     }
//   };

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     const storedId = localStorage.getItem("conversationId");
//     if (!storedId) {
//       const newId = Date.now().toString();
//       localStorage.setItem("conversationId", newId);
//       setConversationId(newId);
//     } else {
//       setConversationId(storedId);
//     }
//   }, []);

//   useEffect(() => {
//     return () => {
//       // When component unmounts, send the full conversation log
//       if (chatHistory.length > 0) {
//         fetch('http://localhost:8000/send-email-summary/', {
//           method: 'POST',
//           headers: { 
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//           },
//           body: JSON.stringify({
//             conversation_id: conversationId,
//             recipient: "aasthaarya2004@gmail.com"
//           }),
//         }).catch(error => {
//           console.error("Failed to send summary email:", error);
//         });
//       }
//     };
//   }, [chatHistory, conversationId]);

//   const PAULBOT_TRIGGERS = [
//     "If you don't see what you're looking for, click on your preferred choice and explore more options on our website: PML Holidays Website. Our team will connect with you shortly to curate the perfect trip for you!",
//     "Thank you! We will contact you shortly."
//   ];

//   const sendMessage = async (event) => {
//     event.preventDefault();
//     if (message.trim() === '') return;

//     setLoading(true);
//     setChatHistory((prevHistory) => [...prevHistory, { sender: 'user', text: message }]);

//     try {
//       const response = await fetch('http://localhost:8000/chat/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message, role: 'user', conversation_id: conversationId }),
//       });

//       if (!response.ok) throw new Error('Error with API request');

//       const data = await response.json();

//       if (data.conversation_id && data.conversation_id !== conversationId) {
//         localStorage.setItem("conversationId", data.conversation_id);
//         setConversationId(data.conversation_id);
//       }

//       setChatHistory(prev => [...prev, { sender: 'ai', text: data.response }]);
//       setMessage('');
//       setIsChatActive(true);
//       if (PAULBOT_TRIGGERS.some(trigger => data.response.includes(trigger))) {
//         await fetch('http://localhost:8000/send-email-summary/', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//           },
//           body: JSON.stringify({
//             conversation_id: conversationId,
//             recipient: "aasthaarya2004@gmail.com" // replace with dynamic email if needed
//           }),
//         });
//         console.log("📧 Email summary triggered from frontend.");
//       }

//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOptionClick = async (option) => {
//     const newId = Date.now().toString();
//     localStorage.setItem("conversationId", newId);
//     setConversationId(newId);
//     await logInteraction("click", { topic: option });
//     setLoading(true);

//     if (option === "PML Holidays!") {
//       setChatHistory([
//         { sender: 'ai', text: "Welcome to PML Holidays! Get ready to create unforgettable memories!" },
//         { sender: 'ai', text: "What kind of adventure are you looking for? Select from the options below:" }
//       ]);
//       setAdventureOptions([
//         { label: "Solo Explorer", hover: "Discover world by own" },
//         { label: "Couple Goals", hover: "Romantic trip for two of you!" },
//         { label: "Family Vacations", hover: "Fun-filled trips for all ages!" },
//         { label: "BBF's Trip Adventures", hover: "Thrilling with besties!" }
//       ]);
//       setSelectedTopic("PML Holidays!");
//       setIsChatActive(true);
//       setHasWelcomed(true);
//       setMessage('');
//       setLoading(false);
//       return;
//     }

//     if (option === "FOREX") {
//       setChatHistory([
//         { sender: 'ai', text: "Welcome to PML Forex! 💱 How can we assist you today?" },
//         { sender: 'ai', text: "Would you like to:" }
//       ]);
//       setForexOptions([
//         { label: "Buy currency", value: "buy" },
//         { label: "Sell currency", value: "sell" },
//         { label: "Send money abroad", value: "remittance" }
//       ]);
//       setSelectedTopic("FOREX");
//       setIsChatActive(true);
//       setHasWelcomed(true);
//       setMessage('');
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:8000/chat/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           message: `Tell me about ${option}`,
//           role: 'user',
//           conversation_id: conversationId
//         })
//       });

//       const data = await response.json();
//       setChatHistory([{ sender: 'ai', text: data.response }]);
//       setIsChatActive(true);
//       setMessage('');
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAdventureClick = (option) => {
//     logInteraction("adventure_selected", { adventure: option.label });
//     setChatHistory(prev => [
//       ...prev,
//       { sender: 'user', text: option.label },
//       { sender: 'ai', text: "Here are some of our most popular packages:" }
//     ]);
//     setAdventureOptions([]);
//     setPackageOptions([
//       { label: "Tropical Escape", link: "https://pmlholidays.com/tropical" },
//       { label: "️Mountain Retreat", link: "https://pmlholidays.com/mountain" },
//       { label: "️City Lights & Luxury", link: "https://pmlholidays.com/cityluxury" }
//     ]);
//   };

//   const handlePackageClick = (link) => {
//     logInteraction("package_selected", { package: link });
//     setChatHistory(prev => [
//       ...prev,
//       { sender: 'user', text: `Clicked on ${link}` },
//       {
//         sender: 'ai',
//         text: <p>
//           If you don't see what you're looking for, click on your preferred choice and explore more
//           options on our website:{' '}
//           <a href="https://pmlholidays.com" target="_blank" rel="noopener noreferrer">
//             PML Holidays Website
//           </a>. Our team will connect with you shortly to curate
//           the perfect trip for you!
//         </p>
//       }
//     ]);
//     setPackageOptions([]);
//     setFinalMessageShown(true);
//   };

//   const handleForexOptionClick = (option) => {
//     logInteraction("forex_option_selected", { option: option.value });
//     setSelectedForexOption(option.value);
    
//     if (option.value === "remittance") {
//       setChatHistory(prev => [
//         ...prev,
//         { sender: 'user', text: option.label },
//         { sender: 'ai', text: "Please select the type of remittance:" }
//       ]);
//       setRemittanceOptions([
//         { label: "Inward Remittance", value: "inward" },
//         { label: "Outward Remittance", value: "outward" }
//       ]);
//       setForexOptions([]);
//     } else {
//       setChatHistory(prev => [
//         ...prev,
//         { sender: 'user', text: option.label },
//         { sender: 'ai', text: "Select which Currency you want to buy or sell:" }
//       ]);
//       setCurrencyOptions([
//         { label: "USD", value: "USD" },
//         { label: "Euro", value: "EUR" },
//         { label: "CAD", value: "CAD" },
//         { label: "GBP", value: "GBP" }
//       ]);
//       setForexOptions([]);
//     }
//   };

//   const handleRemittanceOptionClick = (option) => {
//     logInteraction("remittance_option_selected", { option: option.value });
//     setChatHistory(prev => [
//       ...prev,
//       { sender: 'user', text: option.label },
//       { sender: 'ai', text: "Select which Currency you want to send:" }
//     ]);
//     setCurrencyOptions([
//       { label: "USD", value: "USD" },
//       { label: "Euro", value: "EUR" },
//       { label: "CAD", value: "CAD" },
//       { label: "GBP", value: "GBP" }
//     ]);
//     setRemittanceOptions([]);
//   };

//   const handleCurrencyClick = (currency) => {
//     logInteraction("currency_selected", { currency: currency.value });
//     setChatHistory(prev => [
//       ...prev,
//       { sender: 'user', text: currency.label },
//       { sender: 'ai', text: "Enter your pin code:" }
//     ]);
//     setCurrencyOptions([]);
//     setShowPincodeInput(true);
//   };

//   const handlePincodeSubmit = async (e) => {
//     e.preventDefault();
//     const pincode = message.trim();
    
//     if (!pincode) {
//       setChatHistory(prev => [
//         ...prev,
//         { sender: 'ai', text: "Please enter a valid pincode." }
//       ]);
//       return;
//     }

//     setLoading(true);
//     setChatHistory(prev => [...prev, { sender: 'user', text: pincode }]);
//     logInteraction("pincode_entered", { pincode });

//     try {
//       const serviceablePincodes = [
//         "380008", "380015", "380009", "143102", "133001", 
//         "143001", "144505", "143505", "142038", "176219", 
//         "151001", "176077", "462011", "148101", "151011", 
//         "160022", "682025", "144205", "176219", "176219", 
//         "151203", "152001", "144207", "122001", "144527", 
//         "143521", "146001", "146001", "500029", "452001", 
//         "142026", "302001", "180002", "144066", "141401", 
//         "132001", "175005", "136118", "141002", "194101", 
//         "144401", "226001", "146105", "175131", "160062", 
//         "142001", "400099", "144040", "110001", "387001", 
//         "110015", "144514", "136128", "144410", "144401", 
//         "145001", "147001", "360005", "140001", "335001", 
//         "174401", "141104", "395007", "144203", "143401", 
//         "174303", "144422", "390007", "140606"
//       ];

//       const isServiceable = serviceablePincodes.includes(pincode);
      
//       if (isServiceable) {
//         setChatHistory(prev => [
//           ...prev,
//           { sender: 'ai', text: "Thank you! We will contact you shortly." }
//         ]);
//       } else {
//         setChatHistory(prev => [
//           ...prev,
//           { 
//             sender: 'ai', 
//             text: (
//               <p>
//                 We're sorry, but our Forex services are not available in your location at the moment. However,
//                 we'd love to assist you with Travel or Insurance services. Check them out here:{' '}
//                 <a 
//                   href="https://www.paulmerchants.net/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-blue-400 hover:underline"
//                 >
//                   Paul Merchants Website
//                 </a>
//               </p>
//             )
//           }
//         ]);
//       }
//     } catch (error) {
//       console.error("Error checking pincode:", error);
//       setChatHistory(prev => [
//         ...prev,
//         { sender: 'ai', text: "There was an error processing your request. Please try again later." }
//       ]);
//     } finally {
//       setMessage('');
//       setLoading(false);
//       setShowPincodeInput(false);
//     }
//   };

//   const checkPincodeServiceability = async (pincode) => {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         const firstDigit = parseInt(pincode.charAt(0));
//         resolve(firstDigit >= 1 && firstDigit <= 4);
//       }, 1000);
//     });
//   };

//   const handleLanguageSelect = (lang) => {
//     setSelectedLanguage(lang);
//     logInteraction("language_selected", { language: lang });
//   };

//   // const handleNameSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (userName.trim()) {
//   //     logInteraction("name_submitted", { name: userName });
//   //     setNameEntered(true);
//   //     setHasWelcomed(true);
//   //   }
//   // };

//   const handleNameSubmit = async (e) => {
//     e.preventDefault();
  
//     if (userName.trim() && /^[6-9]\d{9}$/.test(userMobile)) {
//       await logInteraction("name_submitted", { name: userName, mobile: userMobile });
//       setNameEntered(true);
//       setHasWelcomed(true);
//     } else {
//       alert("Please enter a valid name and 10-digit mobile number starting with 6-9.");
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center py-10 px-4">
//       <div className="w-full max-w-[450px] h-[calc(100vh-4rem)] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md ml-[10px]">
//             PaulBot 🤖
//           </h1>
//         </div>

//         {!selectedLanguage ? (
//           <>
//             <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">Hi, Welcome to Paul Merchants. Choose the language:</h2>
//             <div className="grid grid-cols-2 gap-4 mx-6">
//               {languages.map((lang, idx) => (
//                 <div
//                   key={idx}
//                   className="option-box"
//                   onClick={() => handleLanguageSelect(lang)}
//                 >
//                   {lang}
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : !nameEntered ? (
//           <form onSubmit={handleNameSubmit} className="flex flex-col items-center space-y-4">
//             <input
//               type="text"
//               value={userName}
//               onChange={(e) => {
//                 const value = e.target.value;
//                     if (/^[a-zA-Z\s]*$/.test(value)) {
//                       setUserName(value);
//                               }
//                             }}
//               placeholder="Enter your name"
//               className="px-6 py-4 rounded-2xl bg-zinc-800 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner w-500px ml-[10px] mr-[10px] mb-[10px]"
//             />

//             <input
//               type="tel"
//               value={userMobile}
//               onChange={(e) => {
//                 const value = e.target.value;
//                 if (/^[0-9]{0,10}$/.test(value)) {
//                   setUserMobile(value);
//                 }
//               }}
//               placeholder="Enter your mobile number"
//               className="px-6 py-4 rounded-2xl bg-zinc-800 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500 text-white text-xl placeholder-gray-400 shadow-inner w-500px ml-[10px] mr-[10px] mb-[10px]"
//             />

//             <button type="submit" className="option-box ml-[10px] mr-[10px] w-250px">Submit</button>
//           </form>
//         ) : !isChatActive && hasWelcomed ? (
//           <>
//             <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">What do you want to know about?</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {options.map((option, idx) => (
//                 <div
//                   key={idx}
//                   className="option-box"
//                   onClick={() => handleOptionClick(option)}
//                   title={`Learn more about ${option}`}
//                 >
//                   {`${idx + 1}. ${option}`}
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <>
//             <div
//               ref={chatContainerRef}
//               className="overflow-y-auto flex-grow bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
//             >
//               {chatHistory.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
//                 >
//                   <div className={`${msg.sender === 'user' ? 'user-message' : 'ai-message'} chat-bubble`}>
//                     <p>{msg.text}</p>
//                   </div>
//                 </div>
//               ))}

//               {loading && (
//                 <div className="flex justify-start animate-pulse">
//                   <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
//                     AI is typing🤔
//                   </div>
//                 </div>
//               )}
//             </div>

//             {adventureOptions.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {adventureOptions.map((opt, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box group relative"
//                     title={opt.hover}
//                     onClick={() => handleAdventureClick(opt)}
//                   >
//                     {opt.label}
//                     <span
//                       onMouseEnter={() => logInteraction("hover", { label: opt.label, hoverText: opt.hover })}
//                       className="absolute z-10 top-full mt-1 text-xs text-gray-300 opacity-0 group-hover:opacity-100"
//                     >
//                       {opt.hover}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {packageOptions.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {packageOptions.map((pkg, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box"
//                     onClick={() => handlePackageClick(pkg.link)}
//                   >
//                     <a href={pkg.link} target="_blank" rel="noopener noreferrer">{pkg.label}</a>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {forexOptions.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {forexOptions.map((opt, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box"
//                     onClick={() => handleForexOptionClick(opt)}
//                   >
//                     {opt.label}
//                   </div>
//                 ))}
//               </div>
//             )}

//             {remittanceOptions.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                 {remittanceOptions.map((opt, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box"
//                     onClick={() => handleRemittanceOptionClick(opt)}
//                   >
//                     {opt.label}
//                   </div>
//                 ))}
//               </div>
//             )}

//             {currencyOptions.length > 0 && (
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-4">
//                 {currencyOptions.map((curr, idx) => (
//                   <div
//                     key={idx}
//                     className="option-box"
//                     onClick={() => handleCurrencyClick(curr)}
//                   >
//                     {curr.label}
//                   </div>
//                 ))}
//               </div>
//             )}

//             <form
//               onSubmit={showPincodeInput ? handlePincodeSubmit : sendMessage}
//               className="mt-4 flex flex-row items-center gap-4 animate-fade-in"
//             >
//               <input
//                 type={showPincodeInput ? "number" : "text"}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-grow px-10 py-10 ml-[10px] mr-[0px] rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner"
//                 placeholder={showPincodeInput ? "Enter your pincode" : "Ask something..."}
//               />

//               <button
//                 type="submit"
//                 disabled={loading || !message.trim()}
//                 className="focus:outline-none bg-transparent p-0 m-0 border-none"
//               >
//                 <img
//                   src="/img.png"
//                   className="w-[55px] h-[80px] ml-[0px] mr-[10px] object-contain hover:scale-105 transition-transform duration-200"
//                   style={{ border: 'none', background: 'transparent', padding: 0, margin: 0, boxShadow: 'none' }}
//                   alt="Send"
//                 />
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;











import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const options = [
  "PML Holidays!",
  "FOREX"
  // "INSURANCE"
];

const languages = ["English", "Hindi"];

const App = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatActive, setIsChatActive] = useState(false);
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const chatContainerRef = useRef(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [adventureOptions, setAdventureOptions] = useState([]);
  const [packageOptions, setPackageOptions] = useState([]);
  const [finalMessageShown, setFinalMessageShown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [userName, setUserName] = useState('');
  const [nameEntered, setNameEntered] = useState(false);
  const [userMobile, setUserMobile] = useState('');
  const [forexOptions, setForexOptions] = useState([]);
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [remittanceOptions, setRemittanceOptions] = useState([]);
  const [showPincodeInput, setShowPincodeInput] = useState(false);
  const [selectedForexOption, setSelectedForexOption] = useState(null);
  const [hasEnteredPincode, setHasEnteredPincode] = useState(false);
  const [hasClickedPackage, setHasClickedPackage] = useState(false);
  const hasEnteredPincodeRef = useRef(false);
  const hasClickedPackageRef = useRef(false);


  const logInteraction = async (eventType, data) => {
    try {
      const timestamp = new Date().toISOString();
      await fetch('http://localhost:8000/log-interaction/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversation_id: conversationId,
          user_name: userName,
          mobile_number: userMobile,
          event_type: eventType,
          metadata: data,
          timestamp: timestamp
        }),
      });
      
      // Also send email for important events
      // if (['click', 'submit', 'hover'].includes(eventType)) {
      //   await fetch('http://localhost:8000/send-email/', {
      //     method: 'POST',
      //     headers: { 
      //       'Content-Type': 'application/json',
      //       'Accept': 'application/json'
      //     },
      //     body: JSON.stringify({
      //       conversation_id: conversationId,
      //       recipient: "aasthaarya2004@gmail.com",
      //       event_data: {
      //         event_type: eventType,
      //         ...data
      //       }
      //     }),
      //   });
      // }
    } catch (error) {
      console.error("Error logging interaction:", error);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  useEffect(() => {
    const storedId = localStorage.getItem("conversationId");
    if (!storedId) {
      const newId = Date.now().toString();
      localStorage.setItem("conversationId", newId);
      setConversationId(newId);
    } else {
      setConversationId(storedId);
    }
  }, []);

  useEffect(() => {
    return () => {
      console.log("🧹 Component is unmounting...");
      console.log("Flags → ref.pincode:", hasEnteredPincodeRef.current);
      // When component unmounts, send the full conversation log
      // if (chatHistory.length > 0) {
        if (hasEnteredPincode || hasClickedPackage || hasEnteredPincodeRef.current) {
          fetch('http://localhost:8000/send-email-summary/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify({
            conversation_id: conversationId,
            recipient: "aasthaarya2004@gmail.com"
          }),
        }).catch(error => {
          console.error("Failed to send summary email:", error);
        });
      }
    };
  }, [chatHistory, conversationId]);
  // }, [hasEnteredPincode, hasClickedPackage, chatHistory, conversationId]); 

  // const PAULBOT_TRIGGERS = [
  //   "If you don't see what you're looking for, click on your preferred choice and explore more options on our website: PML Holidays Website. Our team will connect with you shortly to curate the perfect trip for you!",
  //   "Thank you! We will contact you shortly."
  // ];

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === '') return;

    setLoading(true);
    setChatHistory((prevHistory) => [...prevHistory, { sender: 'user', text: message }]);

    try {
      const response = await fetch('http://localhost:8000/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, role: 'user', conversation_id: conversationId }),
      });

      if (!response.ok) throw new Error('Error with API request');

      const data = await response.json();

      if (data.conversation_id && data.conversation_id !== conversationId) {
        localStorage.setItem("conversationId", data.conversation_id);
        setConversationId(data.conversation_id);
      }

      setChatHistory(prev => [...prev, { sender: 'ai', text: data.response }]);
      setMessage('');
      setIsChatActive(true);
      // if (PAULBOT_TRIGGERS.some(trigger => data.response.includes(trigger))) {
      //   await fetch('http://localhost:8000/send-email-summary/', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Accept': 'application/json'
      //     },
      //     body: JSON.stringify({
      //       conversation_id: conversationId,
      //       recipient: "aasthaarya2004@gmail.com" // replace with dynamic email if needed
      //     }),
      //   });
      //   console.log("📧 Email summary triggered from frontend.");
      // }

    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionClick = async (option) => {
    const newId = Date.now().toString();
    localStorage.setItem("conversationId", newId);
    setConversationId(newId);
    await logInteraction("click", { topic: option });
    setLoading(true);

    if (option === "PML Holidays!") {
      setChatHistory([
        { sender: 'ai', text: "Welcome to PML Holidays! Get ready to create unforgettable memories!" },
        { sender: 'ai', text: "What kind of adventure are you looking for? Select from the options below:" }
      ]);
      setAdventureOptions([
        { label: "Solo Explorer", hover: "Discover world by own" },
        { label: "Couple Goals", hover: "Romantic trip for two of you!" },
        { label: "Family Vacations", hover: "Fun-filled trips for all ages!" },
        { label: "BBF's Trip Adventures", hover: "Thrilling with besties!" }
      ]);
      setSelectedTopic("PML Holidays!");
      setIsChatActive(true);
      setHasWelcomed(true);
      setMessage('');
      setLoading(false);
      return;
    }

    if (option === "FOREX") {
      setChatHistory([
        { sender: 'ai', text: "Welcome to PML Forex! 💱 How can we assist you today?" },
        { sender: 'ai', text: "Would you like to:" }
      ]);
      setForexOptions([
        { label: "Buy currency", value: "buy" },
        { label: "Sell currency", value: "sell" },
        { label: "Send money abroad", value: "remittance" }
      ]);
      setSelectedTopic("FOREX");
      setIsChatActive(true);
      setHasWelcomed(true);
      setMessage('');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `Tell me about ${option}`,
          role: 'user',
          conversation_id: conversationId
        })
      });

      const data = await response.json();
      setChatHistory([{ sender: 'ai', text: data.response }]);
      setIsChatActive(true);
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdventureClick = (option) => {
    logInteraction("adventure_selected", { adventure: option.label });
    setChatHistory(prev => [
      ...prev,
      { sender: 'user', text: option.label },
      { sender: 'ai', text: "Here are some of our most popular packages:" }
    ]);
    setAdventureOptions([]);
    setPackageOptions([
      { label: "Tropical Escape", link: "https://pmlholidays.com/tropical" },
      { label: "️Mountain Retreat", link: "https://pmlholidays.com/mountain" },
      { label: "️City Lights & Luxury", link: "https://pmlholidays.com/cityluxury" }
    ]);
    setHasClickedPackage(true);
  };

  const handlePackageClick = (link) => {
    logInteraction("package_selected", { package: link });
    setChatHistory(prev => [
      ...prev,
      { sender: 'user', text: `Clicked on ${link}` },
      {
        sender: 'ai',
        text: <p>
          If you don't see what you're looking for, click on your preferred choice and explore more
          options on our website:{' '}
          <a href="https://pmlholidays.com" target="_blank" rel="noopener noreferrer">
            PML Holidays Website
          </a>. Our team will connect with you shortly to curate
          the perfect trip for you!
        </p>
      }
    ]);
    setPackageOptions([]);
    setFinalMessageShown(true);
  };

  const handleForexOptionClick = (option) => {
    logInteraction("forex_option_selected", { option: option.value });
    setSelectedForexOption(option.value);
    
    if (option.value === "remittance") {
      setChatHistory(prev => [
        ...prev,
        { sender: 'user', text: option.label },
        { sender: 'ai', text: "Please select the type of remittance:" }
      ]);
      setRemittanceOptions([
        { label: "Inward Remittance", value: "inward" },
        { label: "Outward Remittance", value: "outward" }
      ]);
      setForexOptions([]);
    } else {
      setChatHistory(prev => [
        ...prev,
        { sender: 'user', text: option.label },
        { sender: 'ai', text: "Select which Currency you want to buy or sell:" }
      ]);
      setCurrencyOptions([
        { label: "USD", value: "USD" },
        { label: "Euro", value: "EUR" },
        { label: "CAD", value: "CAD" },
        { label: "GBP", value: "GBP" }
      ]);
      setForexOptions([]);
    }
  };

  const handleRemittanceOptionClick = (option) => {
    logInteraction("remittance_option_selected", { option: option.value });
    setChatHistory(prev => [
      ...prev,
      { sender: 'user', text: option.label },
      { sender: 'ai', text: "Select which Currency you want to send:" }
    ]);
    setCurrencyOptions([
      { label: "USD", value: "USD" },
      { label: "Euro", value: "EUR" },
      { label: "CAD", value: "CAD" },
      { label: "GBP", value: "GBP" }
    ]);
    setRemittanceOptions([]);
  };

  const handleCurrencyClick = (currency) => {
    logInteraction("currency_selected", { currency: currency.value });
    setChatHistory(prev => [
      ...prev,
      { sender: 'user', text: currency.label },
      { sender: 'ai', text: "Enter your pin code:" }
    ]);
    setCurrencyOptions([]);
    setShowPincodeInput(true);
  };

  const handlePincodeSubmit = async (e) => {
    e.preventDefault();
    const pincode = message.trim();
    
    if (!pincode) {
      setChatHistory(prev => [
        ...prev,
        { sender: 'ai', text: "Please enter a valid pincode." }
        
      ]);
      // setHasEnteredPincode(true);
      return;
    }
    // setHasEnteredPincode(true);
    setLoading(true);
    setChatHistory(prev => [...prev, { sender: 'user', text: pincode }]);
    logInteraction("pincode_entered", { pincode });

    try {
      const serviceablePincodes = [
        "380008", "380015", "380009", "143102", "133001", 
        "143001", "144505", "143505", "142038", "176219", 
        "151001", "176077", "462011", "148101", "151011", 
        "160022", "682025", "144205", "176219", "176219", 
        "151203", "152001", "144207", "122001", "144527", 
        "143521", "146001", "146001", "500029", "452001", 
        "142026", "302001", "180002", "144066", "141401", 
        "132001", "175005", "136118", "141002", "194101", 
        "144401", "226001", "146105", "175131", "160062", 
        "142001", "400099", "144040", "110001", "387001", 
        "110015", "144514", "136128", "144410", "144401", 
        "145001", "147001", "360005", "140001", "335001", 
        "174401", "141104", "395007", "144203", "143401", 
        "174303", "144422", "390007", "140606"
      ];

      const isServiceable = serviceablePincodes.includes(pincode);
      // setHasEnteredPincode(true);
      
      if (isServiceable) {
        // setHasEnteredPincode(true);
        setChatHistory(prev => [
          ...prev,
          
          { sender: 'ai', text: "Thank you! We will contact you shortly. " }
          
        ]);
        setHasEnteredPincode(true);
        hasEnteredPincodeRef.current = true;
        console.log("✅ Pincode accepted, flag set");
      }   
      else {
        setChatHistory(prev => [
          ...prev,
          { 
            sender: 'ai', 
            text: (
              <p>
                We're sorry, but our Forex services are not available in your location at the moment. However,
                we'd love to assist you with Travel or Insurance services. Check them out here:{' '}
                <a 
                  href="https://www.paulmerchants.net/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Paul Merchants Website
                </a>
              </p>
            )
          }
        ]);
      }
    } catch (error) {
      console.error("Error checking pincode:", error);
      setChatHistory(prev => [
        ...prev,
        { sender: 'ai', text: "There was an error processing your request. Please try again later." }
      ]);
    } finally {
      setMessage('');
      setLoading(false);
      setShowPincodeInput(false);
    }
  };

  const checkPincodeServiceability = async (pincode) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const firstDigit = parseInt(pincode.charAt(0));
        resolve(firstDigit >= 1 && firstDigit <= 4);
      }, 1000);
    });
  };

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    logInteraction("language_selected", { language: lang });
  };

  // const handleNameSubmit = (e) => {
  //   e.preventDefault();
  //   if (userName.trim()) {
  //     logInteraction("name_submitted", { name: userName });
  //     setNameEntered(true);
  //     setHasWelcomed(true);
  //   }
  // };

  const handleNameSubmit = async (e) => {
    e.preventDefault();
  
    if (userName.trim() && /^[6-9]\d{9}$/.test(userMobile)) {
      await logInteraction("name_submitted", { name: userName, mobile: userMobile });
      setNameEntered(true);
      setHasWelcomed(true);
    } else {
      alert("Please enter a valid name and 10-digit mobile number starting with 6-9.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-gray-950 to-black min-h-screen flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-[450px] h-[calc(100vh-4rem)] bg-opacity-90 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-widest animate-fade-in drop-shadow-md ml-[10px]">
            PaulBot 🤖
          </h1>
        </div>

        {!selectedLanguage ? (
          <>
            <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">Hi, Welcome to Paul Merchants. Choose the language:</h2>
            <div className="grid grid-cols-2 gap-4 mx-6">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="option-box"
                  onClick={() => handleLanguageSelect(lang)}
                >
                  {lang}
                </div>
              ))}
            </div>
          </>
        ) : !nameEntered ? (
          <form onSubmit={handleNameSubmit} className="flex flex-col items-center space-y-4">
            <input
              type="text"
              value={userName}
              onChange={(e) => {
                const value = e.target.value;
                    if (/^[a-zA-Z\s]*$/.test(value)) {
                      setUserName(value);
                              }
                            }}
              placeholder="Enter your name"
              className="px-6 py-4 rounded-2xl bg-zinc-800 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner w-500px ml-[10px] mr-[10px] mb-[10px]"
            />

            <input
              type="tel"
              value={userMobile}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[0-9]{0,10}$/.test(value)) {
                  setUserMobile(value);
                }
              }}
              placeholder="Enter your mobile number"
              className="px-6 py-4 rounded-2xl bg-zinc-800 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500 text-white text-xl placeholder-gray-400 shadow-inner w-500px ml-[10px] mr-[10px] mb-[10px]"
            />

            <button type="submit" className="option-box ml-[10px] mr-[10px] w-250px">Submit</button>
          </form>
        ) : !isChatActive && hasWelcomed ? (
          <>
            <h2 className="text-white text-lg font-semibold mb-4 ml-[20px] mr-[20px]">What do you want to know about?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {options.map((option, idx) => (
                <div
                  key={idx}
                  className="option-box"
                  onClick={() => handleOptionClick(option)}
                  title={`Learn more about ${option}`}
                >
                  {`${idx + 1}. ${option}`}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div
              ref={chatContainerRef}
              className="overflow-y-auto flex-grow bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl p-5 space-y-6 border border-zinc-700 shadow-inner scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
            >
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`w-full flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
                >
                  <div className={`${msg.sender === 'user' ? 'user-message' : 'ai-message'} chat-bubble`}>
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start animate-pulse">
                  <div className="max-w-xs px-4 py-2 rounded-xl bg-gray-900 text-white shadow-md">
                    AI is typing🤔
                  </div>
                </div>
              )}
            </div>

            {adventureOptions.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                {adventureOptions.map((opt, idx) => (
                  <div
                    key={idx}
                    className="option-box group relative"
                    title={opt.hover}
                    onClick={() => handleAdventureClick(opt)}
                  >
                    {opt.label}
                    <span
                      onMouseEnter={() => logInteraction("hover", { label: opt.label, hoverText: opt.hover })}
                      className="absolute z-10 top-full mt-1 text-xs text-gray-300 opacity-0 group-hover:opacity-100"
                    >
                      {opt.hover}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {packageOptions.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                {packageOptions.map((pkg, idx) => (
                  <div
                    key={idx}
                    className="option-box"
                    onClick={() => handlePackageClick(pkg.link)}
                  >
                    <a href={pkg.link} target="_blank" rel="noopener noreferrer">{pkg.label}</a>
                  </div>
                ))}
              </div>
            )}

            {forexOptions.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                {forexOptions.map((opt, idx) => (
                  <div
                    key={idx}
                    className="option-box"
                    onClick={() => handleForexOptionClick(opt)}
                  >
                    {opt.label}
                  </div>
                ))}
              </div>
            )}

            {remittanceOptions.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                {remittanceOptions.map((opt, idx) => (
                  <div
                    key={idx}
                    className="option-box"
                    onClick={() => handleRemittanceOptionClick(opt)}
                  >
                    {opt.label}
                  </div>
                ))}
              </div>
            )}

            {currencyOptions.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-4">
                {currencyOptions.map((curr, idx) => (
                  <div
                    key={idx}
                    className="option-box"
                    onClick={() => handleCurrencyClick(curr)}
                  >
                    {curr.label}
                  </div>
                ))}
              </div>
            )}

            <form
              onSubmit={showPincodeInput ? handlePincodeSubmit : sendMessage}
              className="mt-4 flex flex-row items-center gap-4 animate-fade-in"
            >
              <input
                type={showPincodeInput ? "number" : "text"}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-grow px-10 py-10 ml-[10px] mr-[0px] rounded-2xl bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-xl placeholder-gray-400 shadow-inner"
                placeholder={showPincodeInput ? "Enter your pincode" : "Ask something..."}
              />

              <button
                type="submit"
                disabled={loading || !message.trim()}
                className="focus:outline-none bg-transparent p-0 m-0 border-none"
              >
                <img
                  src="/img.png"
                  className="w-[55px] h-[80px] ml-[0px] mr-[10px] object-contain hover:scale-105 transition-transform duration-200"
                  style={{ border: 'none', background: 'transparent', padding: 0, margin: 0, boxShadow: 'none' }}
                  alt="Send"
                />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default App;