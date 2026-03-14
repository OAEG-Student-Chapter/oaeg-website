import {
  integer,
  primaryKey,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

export const member = sqliteTable("members", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }).notNull(),
  image: text("image").default(""),
  linkedin: text("linkedin").notNull().default(""),
});

export type Member = typeof member.$inferSelect;
export type NewMember = typeof member.$inferInsert;

export const committee = sqliteTable("committees", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  year: integer("year").notNull(),
  body: text("body", { enum: ["main", "student"], length: 10 }).notNull(), // main | student
});

export type Committee = typeof committee.$inferSelect;
export type NewCommittee = typeof committee.$inferInsert;

export const excoMember = sqliteTable(
  "exco_members",
  {
    committeeId: integer("committee_id")
      .notNull()
      .references(() => committee.id),
    memberId: integer("member_id")
      .notNull()
      .references(() => member.id),
    role: text("role").notNull(),
    sortKey: integer("sort_key").notNull(),
  },
  (table) => [primaryKey({ columns: [table.committeeId, table.memberId] })],
);

export type ExcoMember = typeof excoMember.$inferSelect;
export type NewExcoMember = typeof excoMember.$inferInsert;

export const project = sqliteTable("projects", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title", { length: 256 }).notNull(),
  slug: text("slug", { length: 256 }).notNull().unique(),
  thumbnail: text("thumbnail").default(""),
  content: text("content").notNull().default(""), // HTML content from TipTap
  status: text("status", { enum: ["draft", "published"] }).notNull().default("draft"),
  seoMetadata: text("seo_metadata", { mode: "json" }),
});

export type Project = typeof project.$inferSelect;
export type NewProject = typeof project.$inferInsert;
