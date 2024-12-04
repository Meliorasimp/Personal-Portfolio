import emailjs, { send } from 'emailjs-com'
import React, { useState } from 'react'

const Contacts = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    if(!name || !email || !subject || !message) {
      alert('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
      alert('Invalid Email');
      return;
    }

    const templateParams = {
      name,
      email,
      subject,
      message
    }

    emailjs.send('service_5fvy808', 'template_od04m9w', templateParams, 'vmsaNIFflIGi69Mgn')
      .then((response) => {
        console.log('Email sent successfully');
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        setSuccess('Email sent successfully')
      }, (error) => {
        setError('Failed to send email')
      }); 
    }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-800 to-gray-900 p-10"> 
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-16 mt-20">Let's Work Together!</h1>
      <div>
        <form className="flex flex-col items-center justify-center gap-3" onSubmit={sendEmail}>
          <input type="text" 
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-96  p-3 rounded-md" />
          <input type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-96 p-3 rounded-md" />
          <input type="text" 
            placeholder="Subject" 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-96 p-3 rounded-md" />
          <textarea placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-96 h-40 p-3 rounded-md" />
          <button className="bg-green-400 p-3 rounded-md hover:bg-green-600 text-white font-bold w-44">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contacts
