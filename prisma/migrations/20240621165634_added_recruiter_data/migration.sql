/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `ApplicantData` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `RecruiterData` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `job_title` VARCHAR(191) NOT NULL,
    `linked_in_profile` VARCHAR(191) NOT NULL,
    `years_of_experience` INTEGER NULL,
    `positions_looking` VARCHAR(191) NULL,
    `recruitment_methods` VARCHAR(191) NULL,
    `monthly_recruitment` INTEGER NULL,
    `specialization` VARCHAR(191) NULL,
    `hiring_manager_coordination` VARCHAR(191) NULL,
    `candidate_communication_methods` VARCHAR(191) NULL,
    `recruitment_challenges` VARCHAR(191) NULL,
    `overcoming_stratigies` VARCHAR(191) NULL,
    `comment` VARCHAR(191) NULL,

    UNIQUE INDEX `RecruiterData_userId_key`(`userId`),
    UNIQUE INDEX `RecruiterData_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Company` (
    `id` VARCHAR(191) NOT NULL,
    `recruiterDataId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `size` INTEGER NULL,
    `industry` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,
    `sourcing_method` VARCHAR(191) NULL,
    `candidate_evaluation_criteria` VARCHAR(191) NULL,
    `interview_methods` VARCHAR(191) NULL,
    `background_checks` VARCHAR(191) NULL,
    `skills_assessment_methods` VARCHAR(191) NULL,
    `recruitment_software_and_tools` VARCHAR(191) NULL,
    `ats_familiarity` VARCHAR(191) NULL,
    `recruitment_success_measurement` VARCHAR(191) NULL,
    `kpi_tracked` VARCHAR(191) NULL,

    UNIQUE INDEX `Company_recruiterDataId_key`(`recruiterDataId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `ApplicantData_phone_key` ON `ApplicantData`(`phone`);

-- AddForeignKey
ALTER TABLE `RecruiterData` ADD CONSTRAINT `RecruiterData_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Company` ADD CONSTRAINT `Company_recruiterDataId_fkey` FOREIGN KEY (`recruiterDataId`) REFERENCES `RecruiterData`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
