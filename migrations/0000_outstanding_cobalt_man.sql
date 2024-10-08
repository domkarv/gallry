CREATE TABLE IF NOT EXISTS "gallry_group" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL,
	"admin" varchar(256) NOT NULL,
	"images" varchar(256)[] DEFAULT ARRAY[]::text[] NOT NULL,
	"thumbnail" varchar(256),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "gallry_group_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "gallry_image" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL,
	"url" varchar(1024) NOT NULL,
	"user_id" varchar(256) NOT NULL,
	"group_id" uuid NOT NULL,
	"is_thumbnail" boolean NOT NULL,
	"public_id" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "gallry_image" ADD CONSTRAINT "gallry_image_group_id_gallry_group_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."gallry_group"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
