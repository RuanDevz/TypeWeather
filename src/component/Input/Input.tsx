import React, { ComponentProps } from 'react'

type InputProps = ComponentProps<'input'>&{
    id: string
}

const Input = ({id, ...props}:InputProps) => {
  return (
    <div>
      <label htmlFor={id}></label>
      <input placeholder='  Buscar Local' className='w-[311px] bg-[#1E1E29] py-3 px-1 rounded-lg focus:outline-none text-white indent-3' id={id} type="text" {...props} />
    </div>
  )
}

export default Input
