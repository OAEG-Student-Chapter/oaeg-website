import { getDb } from "@/lib/db";
import { project } from "@/db/schema";
import { eq } from "drizzle-orm";
import { ProjectEditor } from "@/components/admin/project-editor";

export const dynamic = 'force-dynamic';

export default async function ProjectEditPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const isNew = params.id === "new";
  let initialData = null;

  if (!isNew) {
    const db = getDb();
    const data = await db.select().from(project).where(eq(project.id, Number(params.id))).limit(1);
    if (data.length > 0) {
      initialData = data[0];
    }
  }

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold tracking-tight mb-6">{isNew ? "Create Project" : "Edit Project"}</h1>
      <ProjectEditor initialData={initialData} />
    </div>
  );
}
