import { useState } from 'react'
import './App.css'
import { SendHorizonal } from 'lucide-react'

function App() {

  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const name = formData.get("name")
    const message = formData.get("message")


    setMessages(prevState =>
      [...prevState, { user: name, message }]
    )
  }

  return (
    <main className='flex gap-12'>
      <div className="w-90 h-max p-4 bg-gray-400 rounded">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="name">Nombre</label>
          <input type="text" id='name' name='name' className='outline-1 rounded bg-white text-black px-4' />
          <label htmlFor="message">Mensaje</label>
          <input type="text" id='message' name='message' className='outline-1 rounded bg-white text-black px-4' />
          <button type="submit" className='flex items-center justify-center gap-2'>
            Enviar
            <SendHorizonal />
          </button>
        </form>
      </div>
      <div className="w-90 h-max p-4 bg-gray-400 rounded">
        <h2>Chat</h2>
        {messages && messages.map((m, index) => <p key={index}><b>{m.user}:</b> | {m.message}</p>)}
      </div>
    </main>
  )
}

export default App
