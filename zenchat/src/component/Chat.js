import ChatBackground from '../image/ChatBackground.png';
// import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import React from 'react';
import "@fontsource/poppins";

import { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, Message, MessageInput, TypingIndicator, MessageList } from '@chatscope/chat-ui-kit-react'
import './style/Chat.css'
const OPEN_API_KEY = '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'
const systemMessage = {
  "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
}

function Chat() {
  const containerStyle = {
    // backgroundColor: '#3A86FF',
    // height: '120vh'
  };

  const bodyStyle = {
    backgroundImage: `url(${ChatBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh'
  };

  const styles = {
    color: "#3A86FF",
    background: '#3A86FF'

  }

  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    }

    const newMessages = [...messages, newMessage]
    setMessages(newMessages)
    setTyping(true)
    await processMessageToChatGPT(newMessages);


    async function processMessageToChatGPT(chatMessages) {

      let apiMessages = chatMessages.map((messageObject) => {
        let role = "";
        if (messageObject.sender === "ChatGPT") {
          role = "assistant";
        } else {
          role = "user";
        }
        return { role: role, content: messageObject.message }
      });

      const apiRequestBody = {
        "model": "gpt-3.5-turbo",
        "messages": [
          systemMessage,
          ...apiMessages
        ]
      }
      await fetch(`https://api.openai.com/v1/chat/completions`,
        {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + OPEN_API_KEY,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(apiRequestBody)
        }).then((data) => {
          return data.json();

        }).then((data) => {
          console.log("DATA ", data)
          console.log("choices: ", data.choices[0])
          setMessages([...chatMessages, {
            message: data.choices[0].message.content,
            sender: "ChatGPT"
          }])
          setIsTyping(false);
        })
    }

  }



  return (
    <div style={containerStyle}>
      <div style={bodyStyle}>
        <div className='top'>chat session</div>

        {/* <MainContainer className='main-container'> */}

        {/* <ChatContainer> */}
        <MessageList className='msg' typingIndicator={typing ? <TypingIndicator content="ChatGPT is typing" /> : null}>

          {messages.map((message, i) => {
            console.log(message)
            return <Message style={styles} className="msg-content" key={i} model={message} />
          })}
        </MessageList>




        {/* </ChatContainer> */}
        {/* </MainContainer> */}
        <div className='input-container'>fdsfdsfdsf
          <MessageInput style={{ textAlign:'center', fontSize: '16px' }} className='input' place='Type message here' onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}


export default Chat;