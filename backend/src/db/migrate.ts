import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";

const { Client } = pg;

async function main() {
  const databaseUrl =
    process.env.DATABASE_URL_DIRECT?.trim() || process.env.DATABASE_URL?.trim();
  if (!databaseUrl) {
    throw new Error(
      "DATABASE_URL_DIRECT or DATABASE_URL is required to run migrations.",
    );
  }

  const here = path.dirname(fileURLToPath(import.meta.url));
  const sqlPath = path.join(here, "migrations", "001_create_users.sql");
  const sql = readFileSync(sqlPath, "utf8");

  const client = new Client({
    connectionString: databaseUrl,
    ssl: { rejectUnauthorized: false },
  });

  await client.connect();
  try {
    await client.query(sql);
    console.log("Migration applied: 001_create_users.sql");
  } finally {
    await client.end();
  }
}

main().catch((error: unknown) => {
  console.error("Migration failed:", error);
  process.exit(1);
});
