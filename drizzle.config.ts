import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema.ts',
  out: './data',
  driver: 'better-sqlite',
  dbCredentials: {
    url: './sqlite.db',
  }
} satisfies Config;