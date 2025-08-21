import { pgTable, uuid, text, boolean, timestamp, numeric, primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

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

// --- BOARDS ---
export const boards = pgTable("boards", {
  id: uuid("id").primaryKey().notNull(),
  name: text("name").notNull(),
  owner: uuid("owner").notNull().references(() => users.id),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  modifiedAt: timestamp("modifiedAt").notNull(),
});

// --- CATEGORIES ---
export const categories = pgTable("categories", {
  id: uuid("id").primaryKey().notNull(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  icon: text("icon").notNull(),
  userId: uuid("userId").notNull().references(() => users.id),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  modifiedAt: timestamp("modifiedAt").notNull(),
});

// --- TRANSACTIONS ---
export const transactions = pgTable("transactions", {
  id: uuid("id").primaryKey().notNull(),
  date: timestamp("date").notNull(),
  categoryId: uuid("categoryId").notNull().references(() => categories.id),
  description: text("description").notNull(),
  amount: numeric("amount").notNull(),
  boardId: uuid("boardId").notNull().references(() => boards.id),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  modifiedAt: timestamp("modifiedAt").notNull(),
});

// --- BOARD_CATEGORIES ---
export const boardCategories = pgTable("board_categories", {
  id: uuid("id").primaryKey().notNull(),
  boardId: uuid("boardId").notNull().references(() => boards.id),
  categoryId: uuid("categoryId").notNull().references(() => categories.id),
});

// --- BOARD_PERMISSIONS ---
export const boardPermissions = pgTable("board_permissions", {
  boardId: uuid("boardId").notNull().references(() => boards.id),
  userId: uuid("userId").notNull().references(() => users.id),
  permissions: text("permissions").array().notNull()
}, (table) => [
  primaryKey({ columns: [table.boardId, table.userId] })
]);

// --- RELATIONS ---

export const usersRelations = relations(users, ({ many }) => ({
  boards: many(boards),
  categories: many(categories),
  boardPermissions: many(boardPermissions),
}));

export const boardsRelations = relations(boards, ({ one, many }) => ({
  owner: one(users, {
    fields: [boards.owner],
    references: [users.id],
  }),
  childBoards: many(boards),
  boardCategories: many(boardCategories),
  boardPermissions: many(boardPermissions),
  transactions: many(transactions),
}));

export const categoriesRelations = relations(categories, ({ one, many }) => ({
  user: one(users, {
    fields: [categories.userId],
    references: [users.id],
  }),
  transactions: many(transactions),
  boardCategories: many(boardCategories),
}));

export const transactionsRelations = relations(transactions, ({ one }) => ({
  category: one(categories, {
    fields: [transactions.categoryId],
    references: [categories.id],
  }),
  board: one(boards, {
    fields: [transactions.boardId],
    references: [boards.id],
  }),
}));

export const boardCategoriesRelations = relations(boardCategories, ({ one }) => ({
  board: one(boards, {
    fields: [boardCategories.boardId],
    references: [boards.id],
  }),
  category: one(categories, {
    fields: [boardCategories.categoryId],
    references: [categories.id],
  }),
}));

export const boardPermissionsRelations = relations(boardPermissions, ({ one }) => ({
  board: one(boards, {
    fields: [boardPermissions.boardId],
    references: [boards.id],
  }),
  user: one(users, {
    fields: [boardPermissions.userId],
    references: [users.id],
  }),
}));
