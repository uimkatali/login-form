import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
          <h1>Login Form</h1>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About</Link>
        </nav>
  )
}
