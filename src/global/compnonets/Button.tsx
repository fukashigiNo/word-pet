import React from 'react'

interface IButton {
    text: any,
    onClick: () => void
    className?: string
}

export default function Button({
    text, 
    onClick, 
    className,
}: IButton) {
  return (
    <button onClick={onClick} className={className}>
        {text}
    </button>
  )
}
