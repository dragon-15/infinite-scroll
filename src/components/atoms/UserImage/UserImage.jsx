import React from 'react'

export default function UserImage({src, altText, children, compRef}) {
  return (
    <figure ref={compRef}>
      <img src={src} alt={altText}/>
      <figcaption>{children}</figcaption>
    </figure>
  )
}
