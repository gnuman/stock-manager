CREATE TABLE stocks (
    id serial primary key,
    "userId" integer NOT NULL references users(id),
    "scriptId" TEXT NOT NULL,
    "quantity" integer NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP with time zone,
    "updatedAt" TIMESTAMP with time zone,
    deleted boolean DEFAULT FALSE
);
