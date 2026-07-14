import React from 'react'

interface IButton {
    text: string,
    onClick: () => void
    className?: string
}

export default function Button({
    text, 
    onClick, 
    className = "flex justify-center items-center border w-[32px] rounded-md h-[32px] bg-slate-50 text-semibold focus:border focus:border-blue-400 focus:text-[20px]"
}: IButton) {
  return (
    <button onClick={onClick} className={className}>
        {text}
    </button>
  )
}
