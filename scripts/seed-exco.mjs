import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourcePath = path.resolve(__dirname, "exco-members.json");

const raw = fs.readFileSync(sourcePath, "utf8");
const data = JSON.parse(raw);

const bodyMap = {
  mainBody: "main",
  studentChapter: "student",
};

const sqlEscape = (value) => String(value ?? "").replaceAll("'", "''");

const membersMap = new Map();

for (const yearlyData of Object.values(data)) {
  for (const listKey of Object.keys(bodyMap)) {
    const list = Array.isArray(yearlyData[listKey]) ? yearlyData[listKey] : [];
    for (const item of list) {
      const name = item.name ?? "";
      const image = item.avatarSRC ?? "";
      const linkedin = item.linkedin ?? "";
      const key = `${name}||${image}||${linkedin}`;
      if (!membersMap.has(key)) {
        membersMap.set(key, { name, image, linkedin });
      }
    }
  }
}

const sqlLines = [];
sqlLines.push("BEGIN TRANSACTION;");

for (const member of membersMap.values()) {
  sqlLines.push(
    `INSERT INTO members (name, image, linkedin) SELECT '${sqlEscape(member.name)}', '${sqlEscape(member.image)}', '${sqlEscape(member.linkedin)}' WHERE NOT EXISTS (SELECT 1 FROM members WHERE name = '${sqlEscape(member.name)}' AND image = '${sqlEscape(member.image)}' AND linkedin = '${sqlEscape(member.linkedin)}');`,
  );
}

for (const [year, yearlyData] of Object.entries(data)) {
  for (const [sourceBody, dbBody] of Object.entries(bodyMap)) {
    const list = Array.isArray(yearlyData[sourceBody])
      ? yearlyData[sourceBody]
      : [];

    sqlLines.push(
      `INSERT INTO committees (year, body) SELECT ${Number(year)}, '${dbBody}' WHERE NOT EXISTS (SELECT 1 FROM committees WHERE year = ${Number(year)} AND body = '${dbBody}');`,
    );
    sqlLines.push(
      `DELETE FROM exco_members WHERE committee_id = (SELECT MIN(id) FROM committees WHERE year = ${Number(year)} AND body = '${dbBody}');`,
    );

    for (let index = 0; index < list.length; index += 1) {
      const item = list[index];
      const name = item.name ?? "";
      const image = item.avatarSRC ?? "";
      const linkedin = item.linkedin ?? "";
      const role = item.role ?? "";

      sqlLines.push(
        `INSERT INTO exco_members (committee_id, member_id, role, sort_key) VALUES ((SELECT MIN(id) FROM committees WHERE year = ${Number(year)} AND body = '${dbBody}'), (SELECT MIN(id) FROM members WHERE name = '${sqlEscape(name)}' AND image = '${sqlEscape(image)}' AND linkedin = '${sqlEscape(linkedin)}'), '${sqlEscape(role)}', ${index + 1});`,
      );
    }
  }
}

sqlLines.push("COMMIT;");

const sqlPath = path.join(os.tmpdir(), "oaeg-exco-seed.sql");
fs.writeFileSync(sqlPath, `${sqlLines.join("\n")}\n`, "utf8");

const isRemote = process.argv.includes("--remote");
const mode = isRemote ? "--remote" : "--local";

const result = spawnSync(
  "npx",
  ["wrangler", "d1", "execute", "oaeg-db", mode, "--file", sqlPath],
  {
    stdio: "inherit",
    env: process.env,
    shell: process.platform === "win32",
  },
);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

console.log(`Exco seed completed (${isRemote ? "remote" : "local"}).`);
