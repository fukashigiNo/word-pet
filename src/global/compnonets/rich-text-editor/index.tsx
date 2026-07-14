"use client"
import React from 'react'
import { useEditor} from '@tiptap/react'
import { EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import MenuBar from './menu-bar'

export default function RichTextEditor() {
  const editor = useEditor({
    extensions: [
        StarterKit, 
        TextAlign.configure({ types: ["heading", "paragraph"]}),
        Highlight
    ],
    content: '<p><p>',
    immediatelyRender: false,
    editorProps: {
        attributes: {
            class: "min-h-[156px] min-w-3xl border rounded-md bg-slate-50 py-2 px-3",
    },
},
  })

  return (
    <>
    <MenuBar editor={editor} />
    <EditorContent editor={editor}  />
    </>
  )
}
