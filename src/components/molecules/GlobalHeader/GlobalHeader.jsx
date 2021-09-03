import React from 'react'
import { useRouter } from "next/router";

import Button from '../../atoms/Button'

export default function GlobalHeader() {
  const router = useRouter();
  const onLogout = () => {
    router.push('/')
    sessionStorage.removeItem('isAuthenticated')
  }

  return (
    <header className="header">
      <h1>
        Infinite Scroll
      </h1>
      <Button type="button" clickHandler={onLogout}>Logout</Button>
    </header>
  )
}
