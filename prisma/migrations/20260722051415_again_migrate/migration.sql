/*
  Warnings:

  - You are about to drop the column `branchId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the `Branch` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `conversationId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Branch" DROP CONSTRAINT "Branch_conversationId_fkey";

-- DropForeignKey
ALTER TABLE "Branch" DROP CONSTRAINT "Branch_parentBranchId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_branchId_fkey";

-- DropIndex
DROP INDEX "Message_branchId_createdAt_idx";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "branchId",
ADD COLUMN     "conversationId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Branch";

-- CreateIndex
CREATE INDEX "Message_conversationId_createdAt_idx" ON "Message"("conversationId", "createdAt" DESC);

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
