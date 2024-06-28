import React, { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'>&{
    children: string
}
const Button = ({children}: ButtonProps) => {
  return (
    <div>
     <button className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-24 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">{children}</button>
    </div>
  )
}

export default Button
