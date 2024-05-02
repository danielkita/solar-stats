import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const solarData = sqliteTable('solarData', {
  id: text('id').unique().primaryKey().$defaultFn(() => crypto.randomUUID()),
  timestamp: integer('timestamp').notNull().$defaultFn(() => +Date.now()),
  yieldHourly: integer('yieldHourly').notNull(),
  currentYield: integer('currentYield').notNull(),
});