import React from 'react'

export default function Navbar() {
  return (
    <nav id="navbar">
        <p>home</p>
        <form>
            <select name="category">
                <option defaultValue>Choose a Category</option>
            </select>
            <input type='submit' />
        </form>
        <p>Login</p>
    </nav>
  )
}
