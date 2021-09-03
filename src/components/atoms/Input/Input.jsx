import React from 'react'

export default function Input({id, label, type, placeholder, name}) {
  return (
    <div className="input">
      <label htmlFor={id} className="input__label">{label}</label>
      <input id={id} type={type} placeholder={placeholder} name={name} className="input__field"/>
    </div>
  )
}
