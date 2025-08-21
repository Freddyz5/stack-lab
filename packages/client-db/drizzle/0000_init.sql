--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"name" text NOT NULL,
	"lastName" text NOT NULL,
	"avatar" text DEFAULT '',
	"password" text NOT NULL,
	"isActive" boolean NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"modifiedAt" timestamp NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);