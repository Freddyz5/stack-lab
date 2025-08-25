CREATE TABLE "games" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"genre" text DEFAULT '',
	"difficulty" text DEFAULT '',
	"state" text DEFAULT '',
	"isActive" boolean NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"modifiedAt" timestamp NOT NULL
);
