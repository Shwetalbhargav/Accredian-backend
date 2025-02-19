-- CreateTable
CREATE TABLE `Course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `referrer_bonus` INTEGER NOT NULL,
    `referee_bonus` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Referral` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referrer_name` VARCHAR(191) NOT NULL,
    `referrer_email` VARCHAR(191) NOT NULL,
    `referrer_phone` VARCHAR(191) NOT NULL,
    `referee_name` VARCHAR(191) NOT NULL,
    `referee_email` VARCHAR(191) NOT NULL,
    `referee_phone` VARCHAR(191) NOT NULL,
    `course_id` INTEGER NOT NULL,
    `referral_code` VARCHAR(191) NOT NULL,
    `date_of_referral` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `consent` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Referral_referrer_email_key`(`referrer_email`),
    UNIQUE INDEX `Referral_referee_email_key`(`referee_email`),
    UNIQUE INDEX `Referral_referral_code_key`(`referral_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Referral` ADD CONSTRAINT `Referral_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `Course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
