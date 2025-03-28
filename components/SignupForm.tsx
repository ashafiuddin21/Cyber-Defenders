import React, { useState } from 'react';


export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    if (res.ok) {
      setStatus('Thanks for signing up!')
      setEmail('')
    } else {
      setStatus('Something went wrong.')
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-12 bg-gray-800 p-6 rounded-md">
      <h3 className="text-lg font-semibold mb-2">Stay in the loop</h3>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white focus:outline-none"
          required
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 py-2 rounded">
          Sign Up
        </button>
        {status && <p className="text-sm mt-2">{status}</p>}
      </form>
    </div>
  )
}
