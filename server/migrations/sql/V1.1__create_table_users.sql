CREATE TABLE users (
    id serial primary key,
    "authId" integer NOT NULL references auths(id),
    "profileName" TEXT NOT NULL,
    "profilePic" TEXT,
    "balance" integer,
    "createdAt" TIMESTAMP with time zone,
    "updatedAt" TIMESTAMP with time zone,
    deleted boolean DEFAULT FALSE
);
