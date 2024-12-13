CREATE TABLE "users" (
	"address" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"fid" varchar(255),
	"image" varchar(255),
	"signer_uuid" text NOT NULL,
	"createdAt" timestamp (6) DEFAULT now(),
	"expiresAt" timestamp (6)
);
