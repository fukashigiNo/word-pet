"use client"
import React from 'react'
import { useEditor} from '@tiptap/react'
import { EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import CodeBlock from '@tiptap/extension-code-block'
import MenuBar from './menu-bar'

export default function RichTextEditor() {
  const editor = useEditor({
    extensions: [
        StarterKit.configure({heading: {levels: [1, 2, 3]},}), 
        TextAlign.configure({ types: ["heading", "paragraph"]}),
        Highlight,
        CodeBlock
    ],
    content: '<p><p>',
    immediatelyRender: false,
    editorProps: {
        attributes: {
            class: [
      "min-h-[156px] min-w-3xl border rounded-md bg-slate-50 py-2 px-3 focus:outline-none",
      // h1s
      "[&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-4",
      // h2
      "[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mb-3",
      // h3
      "[&_h3]:text-xl [&_h3]:font-medium [&_h3]:mb-2",
      // ol
      "[&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4",
      // ul
      "[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4",
      //codeblock
         //<pre>
            "[&_pre]:bg-slate-900 [&_pre]:text-slate-100 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:my-4 [&_pre]:font-mono [&_pre]:overflow-x-auto",
        //<code>
            "[&_code]:bg-slate-200 [&_code]:text-red-500 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-mono [&_code]:text-sm",
            //pre
            "[&_pre_code]:bg-transparent [&_pre_code]:text-inherit [&_pre_code]:p-0"
    ].join(" "),
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
