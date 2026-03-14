"use server";

import { getDb } from "@/lib/db";
import { project } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function saveProjectAction(data: any) {
  const db = getDb();
  if (data.id) {
    await db.update(project).set({
      title: data.title,
      slug: data.slug,
      thumbnail: data.thumbnail,
      content: data.content,
      status: data.status,
      seoMetadata: data.seoMetadata,
    }).where(eq(project.id, data.id));
  } else {
    await db.insert(project).values({
      title: data.title,
      slug: data.slug,
      thumbnail: data.thumbnail,
      content: data.content,
      status: data.status,
      seoMetadata: data.seoMetadata,
    });
  }
  revalidatePath("/admin/projects");
}
