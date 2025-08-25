import { pgTable, uuid, text, boolean, timestamp } from "drizzle-orm/pg-core";

// --- USERS ---
export const users = pgTable("users", {
  id: uuid("id").primaryKey().notNull(),
  email: text("email").unique().notNull(),
  name: text("name").notNull(),
  lastName: text("lastName").notNull(),
  avatar: text("avatar").default(""),
  password: text("password").notNull(),
  isActive: boolean("isActive").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  modifiedAt: timestamp("modifiedAt").notNull(),
});

// --- GAMES ---

export const games = pgTable("games", {
  id: uuid("id").primaryKey().notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  genre: text("genre").default(""),
  difficulty: text("difficulty").default(""),
  state: text("state").default(""),
  isActive: boolean("isActive").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  modifiedAt: timestamp("modifiedAt").notNull(),
});