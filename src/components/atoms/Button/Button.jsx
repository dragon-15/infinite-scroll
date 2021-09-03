import React from 'react'

export default function Button({children, type, clickHandler}) {
  return (
    <button type={type} onClick={clickHandler}>
      {children}
    </button>
  )
}
