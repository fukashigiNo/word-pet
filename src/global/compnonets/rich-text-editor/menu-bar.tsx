import React from 'react'
import Button from '../Button'

export default function MenuBar({editor}: any) {
    if (!editor) return null
  return (
    <div className='mb-5'>
        <Button 
            text='H1' 
            onClick={() => {editor.chain().focus().toggleHeading({level: 1}).run()}} 
            className={editor.isActive("heading", {level: 1}) ? "is-active w-[32px] h-[32px] border" : ""}
        />
    </div>
  )
}
