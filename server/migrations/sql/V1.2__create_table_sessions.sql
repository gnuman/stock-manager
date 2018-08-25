CREATE TABLE loginsessions (
    id serial primary key,
    "secretKey" TEXT NOT NULL,
    "userId" integer NOT NULL references users(id),
    "createdAt" TIMESTAMP with time zone,
    "updatedAt" TIMESTAMP with time zone,
    "expiryTime" INTEGER NOT NULL
);
