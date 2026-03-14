"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";

interface TipTapEditorProps {
  content: string;
  onChange: (richText: string) => void;
}

export function TipTapEditor({ content, onChange }: TipTapEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none border p-4 min-h-[300px] rounded-md shadow-sm",
      },
    },
  });

  const addImage = useCallback(
    (url: string) => {
      if (editor && url) {
        editor.chain().focus().setImage({ src: url }).run();
      }
    },
    [editor]
  );

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2 border p-2 rounded-md bg-muted/50">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={
            editor.isActive("bold") ? "bg-primary text-primary-foreground" : ""
          }
        >
          Bold
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={
            editor.isActive("italic")
              ? "bg-primary text-primary-foreground"
              : ""
          }
        >
          Italic
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={
            editor.isActive("heading", { level: 2 })
              ? "bg-primary text-primary-foreground"
              : ""
          }
        >
          H2
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive("bulletList")
              ? "bg-primary text-primary-foreground"
              : ""
          }
        >
          Bullet List
        </Button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
