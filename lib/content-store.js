import { neon } from "@neondatabase/serverless";

import { DEFAULT_CONTENT } from "./content-defaults";

let sqlClient = null;
let dbConfigured = false;
let tableReady = false;

function getSql() {
  if (sqlClient) return sqlClient;

  const connectionString =
    process.env.DATABASE_URL || process.env.POSTGRES_URL;

  if (!connectionString) return null;

  sqlClient = neon(connectionString);
  dbConfigured = true;
  return sqlClient;
}

export function isContentStoreConfigured() {
  getSql();
  return dbConfigured;
}

async function ensureTable(sql) {
  if (tableReady) return;

  await sql`
    CREATE TABLE IF NOT EXISTS site_content (
      id INT PRIMARY KEY,
      data JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;

  tableReady = true;
}

function mergeWithDefaults(saved) {
  if (!saved || typeof saved !== "object") return DEFAULT_CONTENT;

  return {
    ...DEFAULT_CONTENT,
    ...saved,
    hero: { ...DEFAULT_CONTENT.hero, ...saved.hero },
    about: { ...DEFAULT_CONTENT.about, ...saved.about },
    contact: { ...DEFAULT_CONTENT.contact, ...saved.contact },
    social: { ...DEFAULT_CONTENT.social, ...saved.social },
    education: Array.isArray(saved.education)
      ? saved.education
      : DEFAULT_CONTENT.education,
    experience: Array.isArray(saved.experience)
      ? saved.experience
      : DEFAULT_CONTENT.experience,
    skills: Array.isArray(saved.skills) ? saved.skills : DEFAULT_CONTENT.skills,
    certifications: Array.isArray(saved.certifications)
      ? saved.certifications
      : DEFAULT_CONTENT.certifications,
    projects: Array.isArray(saved.projects)
      ? saved.projects
      : DEFAULT_CONTENT.projects,
  };
}

export async function getSiteContent() {
  const sql = getSql();

  if (!sql) return DEFAULT_CONTENT;

  try {
    await ensureTable(sql);
    const rows = await sql`SELECT data FROM site_content WHERE id = 1`;
    return mergeWithDefaults(rows[0]?.data);
  } catch {
    return DEFAULT_CONTENT;
  }
}

export async function saveSiteContent(content) {
  const sql = getSql();

  if (!sql) {
    throw new Error(
      "Content storage is not configured. Set DATABASE_URL (a Postgres connection string)."
    );
  }

  const merged = mergeWithDefaults(content);

  await ensureTable(sql);
  await sql`
    INSERT INTO site_content (id, data, updated_at)
    VALUES (1, ${JSON.stringify(merged)}::jsonb, now())
    ON CONFLICT (id) DO UPDATE SET data = ${JSON.stringify(merged)}::jsonb, updated_at = now()
  `;

  return merged;
}
