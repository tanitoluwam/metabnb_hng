import React from 'react'

export const Button = ({children ,style}) => {
  return (
   <button className={style}>
     {children}
   </button>
  )
}
