import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <p>home</p>
        <form>
            <select>
                <option>All</option>
            </select>
            <input type='submit' />
        </form>
        <p>Login</p>
    </nav>
  )
}
