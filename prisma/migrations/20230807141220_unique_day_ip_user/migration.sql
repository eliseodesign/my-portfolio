/*
  Warnings:

  - A unique constraint covering the columns `[day,ipUser]` on the table `messageContact` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "messageContact_ipUser_key";

-- CreateIndex
CREATE UNIQUE INDEX "messageContact_day_ipUser_key" ON "messageContact"("day", "ipUser");
