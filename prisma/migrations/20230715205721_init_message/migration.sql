-- CreateTable
CREATE TABLE "messageContact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "day" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ipUser" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "messageContact_ipUser_key" ON "messageContact"("ipUser");
