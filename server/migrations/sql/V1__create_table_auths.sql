CREATE TABLE auths (
    id serial primary key,
    "passwordHash" TEXT NOT NULL,
    email TEXT NOT NULL,
    "createdAt" TIMESTAMP with time zone,
    "updatedAt" TIMESTAMP with time zone,
    constraint auth_group UNIQUE  (email)
);