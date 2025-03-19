/*
  Warnings:

  - You are about to drop the column `imagem` on the `projetos` table. All the data in the column will be lost.
  - You are about to drop the column `nive` on the `projetos` table. All the data in the column will be lost.
  - Added the required column `nivel` to the `projetos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repositorio` to the `projetos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projetos" DROP COLUMN "imagem",
DROP COLUMN "nive",
ADD COLUMN     "destaque" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "imagens" TEXT[],
ADD COLUMN     "nivel" INTEGER NOT NULL,
ADD COLUMN     "repositorio" TEXT NOT NULL;
