import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import "@fontsource/poppins";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MainContainer, ChatContainer, Message, MessageInput, TypingIndicator, MessageList } from '@chatscope/chat-ui-kit-react'
import './style/chat.css'
const OPEN_API_KEY = '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'
const systemMessage = {
  "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
}

function App() {
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
    <div className='outer'>

      <div className='top'>

        Chat Session</div>

      <MainContainer className='main-container'>

        <ChatContainer>
          <MessageList scrollBehavior='smooth' typingIndicator={typing ? <TypingIndicator content="ChatGPT is typing" /> : null}>

            {messages.map((message, i) => {
              console.log(message)
              return <Message key={i} model={message} />
            })}
          </MessageList>
    

          <MessageInput style={{ flexGrow: 1, marginRight: 10, textOverflow: 'ellipsis', overflow: 'hidden' }} place='Type message here' onSend={handleSend}

          />
      
        </ChatContainer>
      </MainContainer>

    </div>
  )
}

export default App
