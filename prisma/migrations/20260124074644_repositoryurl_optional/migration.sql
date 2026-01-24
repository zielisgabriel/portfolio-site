-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "repositoryUrl" TEXT,
    "projectUrl" TEXT
);
INSERT INTO "new_Project" ("description", "id", "imageUrl", "projectUrl", "repositoryUrl", "title") SELECT "description", "id", "imageUrl", "projectUrl", "repositoryUrl", "title" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
