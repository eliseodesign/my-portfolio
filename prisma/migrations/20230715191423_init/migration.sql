-- CreateTable
CREATE TABLE "messageContact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "day" DATETIME NOT NULL,
    "ipUser" TEXT NOT NULL
);
