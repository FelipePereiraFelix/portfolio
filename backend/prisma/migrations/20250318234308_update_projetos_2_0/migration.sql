/*
  Warnings:

  - You are about to drop the column `imagens` on the `projetos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "projetos" DROP COLUMN "imagens",
ADD COLUMN     "imagem" TEXT[];
