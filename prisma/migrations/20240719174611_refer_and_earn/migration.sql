-- CreateTable
CREATE TABLE `Student` (
    `student_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NULL,
    `current_courses` VARCHAR(191) NULL,
    `preferred_communication_method` ENUM('Email', 'Phone') NOT NULL,

    PRIMARY KEY (`student_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Referrer` (
    `referrer_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NULL,
    `relation_to_referred_student` VARCHAR(191) NULL,
    `current_courses` VARCHAR(191) NULL,

    PRIMARY KEY (`referrer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReferredStudent` (
    `referred_student_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NULL,
    `preferred_communication_method` ENUM('Email', 'Phone') NOT NULL,
    `interested_courses` VARCHAR(191) NULL,

    PRIMARY KEY (`referred_student_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Course` (
    `course_id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_name` VARCHAR(191) NOT NULL,
    `course_duration` VARCHAR(191) NULL,
    `course_fee` DOUBLE NULL,

    PRIMARY KEY (`course_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReferralDetails` (
    `referral_id` INTEGER NOT NULL AUTO_INCREMENT,
    `student_id` INTEGER NOT NULL,
    `referrer_id` INTEGER NOT NULL,
    `referred_student_id` INTEGER NOT NULL,
    `course_id` INTEGER NOT NULL,
    `preferred_start_date` DATETIME(3) NULL,
    `previous_experience` ENUM('Yes', 'No') NOT NULL,
    `specific_experience` VARCHAR(191) NULL,
    `preferred_language` VARCHAR(191) NULL,
    `specific_requirements_or_goals` VARCHAR(191) NULL,
    `consent` ENUM('Yes', 'No') NOT NULL,
    `referrer_signature` VARCHAR(191) NULL,
    `referral_date` DATETIME(3) NULL,
    `referral_received_by` VARCHAR(191) NULL,
    `follow_up_action_taken` VARCHAR(191) NULL,
    `comments` VARCHAR(191) NULL,

    PRIMARY KEY (`referral_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ReferralDetails` ADD CONSTRAINT `ReferralDetails_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Student`(`student_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReferralDetails` ADD CONSTRAINT `ReferralDetails_referrer_id_fkey` FOREIGN KEY (`referrer_id`) REFERENCES `Referrer`(`referrer_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReferralDetails` ADD CONSTRAINT `ReferralDetails_referred_student_id_fkey` FOREIGN KEY (`referred_student_id`) REFERENCES `ReferredStudent`(`referred_student_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReferralDetails` ADD CONSTRAINT `ReferralDetails_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `Course`(`course_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
