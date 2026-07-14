import Button from '../Button'
import { 
    Heading1, 
    Heading2, 
    Heading3, 
    Bold, 
    Italic, 
    Strikethrough, 
    List, 
    AlignCenter, 
    AlignLeft, 
    AlignRight, 
    ListOrdered, 
    Highlighter,
    Code2 
} from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'
import { Editor } from '@tiptap/react'
    

export default function MenuBar({editor}: {editor: Editor | null}) {
    if (!editor) return null
    
    const Options = [
        {
            icon: <Heading1 className='size-4' />,
            onClick: () => editor.chain().focus().toggleHeading({level: 1}).run(),
            pressed: editor.isActive("heading", {level: 1})
        }, {
            icon: <Heading2 className='size-4' />,
            onClick: () => editor.chain().focus().toggleHeading({level: 2}).run(),
            pressed: editor.isActive("heading", {level: 2})
        }, {
            icon: <Heading3 className='size-4' />,
            onClick: () => editor.chain().focus().toggleHeading({level: 3}).run(),
            pressed: editor.isActive("heading", {level: 3})
        }, {
            icon: <Bold className='size-4' />,
            onClick: () => editor.chain().focus().toggleBold().run(),
            pressed: editor.isActive("bold")
        }, {
            icon: <Italic className='size-4' />,
            onClick: () => editor.chain().focus().toggleItalic().run(),
            pressed: editor.isActive("italic"),
        }, {
            icon: <Strikethrough className='size-4' />,
            onClick: () => editor.chain().focus().toggleStrike().run(),
            pressed: editor.isActive("strike")
        }, {
            icon: <AlignLeft className='size-4' />,
            onClick: () =>  editor.chain().focus().setTextAlign("left").run(),
            pressed: editor.isActive({textAlign: "left"})
        }, {
            icon: <AlignCenter className='size-4' />,
            onClick: () => editor.chain().focus().setTextAlign("center").run(),
            pressed: editor.isActive({textAlign: "center"})
        }, {
             icon: <AlignRight className='size-4' />,
            onClick: () => editor.chain().focus().setTextAlign("right").run(),
            pressed: editor.isActive({textAlign: "right"})
        }, {
            icon: <List className='size-4' />,
            onClick: () => editor.chain().focus().toggleBulletList().run(),
            pressed: editor.isActive("bulletList")
        }, {
            icon: <ListOrdered className='size-4' />,
            onClick: () => editor.chain().focus().toggleOrderedList().run(),
            pressed: editor.isActive("orderedList")
        }, {
            icon: <Highlighter className='size-4' />,
            onClick: () => editor.chain().focus().toggleHighlight().run(),
            pressed: editor.isActive("highlight")
        }, {
            icon: <Code2 className='size-4' />,
            onClick: () => editor.chain().focus().setCodeBlock().run(),
            pressed: editor.isActive("codeBlock")
        }
    ]

  return (
    <div className="border rounded-md p-1 mb-5 bg-slate-50 space-x-2 z-50">
        {Options.map((item, index )=> (
            <Toggle 
            key={index}
            pressed={item.pressed}
            // className={"" ? item.pressed : ""}
            onClick={item.onClick}
            >
                {item.icon}
            </ Toggle>
        ))}
    </div>
  )
}
