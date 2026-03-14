"use client";

import { TipTapEditor } from "./tiptap-editor";
import { UploadComponent } from "./upload-component";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { saveProjectAction } from "@/app/admin/projects/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function ProjectEditor({ initialData = null }: { initialData?: any }) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [thumbnail, setThumbnail] = useState(initialData?.thumbnail || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [status, setStatus] = useState(initialData?.status || "draft");
  const [seo, setSeo] = useState(initialData?.seoMetadata ? JSON.stringify(initialData.seoMetadata) : "{}");
  
  const router = useRouter();

  const handleSave = async () => {
    try {
      await saveProjectAction({
        id: initialData?.id,
        title,
        slug,
        thumbnail,
        content,
        status,
        seoMetadata: JSON.parse(seo),
      });
      toast.success("Project saved successfully!");
      router.push("/admin/projects");
      router.refresh();
    } catch(e) {
      toast.error("Failed to save project.");
    }
  };

  return (
    <div className="space-y-6 max-w-4xl bg-white p-6 rounded-lg border shadow-sm">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-1.5 block">Title</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Project Title" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Slug</label>
          <Input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="project-title-slug" />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
           <label className="text-sm font-medium mb-1.5 block">Status</label>
           <select 
             className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
             value={status} onChange={(e) => setStatus(e.target.value)}
           >
             <option value="draft">Draft</option>
             <option value="published">Published</option>
           </select>
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Thumbnail URL</label>
          <Input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} placeholder="https://..." />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Upload Thumbnail or Content Images</label>
        <UploadComponent onUpload={(url) => setThumbnail(url)} />
        <p className="text-xs text-muted-foreground mt-2">Uploading replacing the thumbnail URL. For editor images, copy the response link.</p>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Project Content</label>
        <TipTapEditor content={content} onChange={(html) => setContent(html)} />
      </div>

      <Button onClick={handleSave} className="w-full sm:w-auto">Save Project</Button>
    </div>
  );
}
