const express = require('express');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

app.post('/api/referrals', async (req, res) => {
  const {
    studentId,
    referrerId,
    referredStudentId,
    courseId,
    preferredStartDate,
    previousExperience,
    specificExperience,
    preferredLanguage,
    specificRequirementsOrGoals,
    consent,
    referrerSignature,
    referralDate,
    referralReceivedBy,
    followUpActionTaken,
    comments
  } = req.body;

  try {
    const newReferral = await prisma.referralDetail.create({
      data: {
        student_id: studentId,
        referrer_id: referrerId,
        referred_student_id: referredStudentId,
        course_id: courseId,
        preferred_start_date: new Date(preferredStartDate),
        previous_experience: previousExperience,
        specific_experience: specificExperience,
        preferred_language: preferredLanguage,
        specific_requirements_or_goals: specificRequirementsOrGoals,
        consent: consent,
        referrer_signature: referrerSignature,
        referral_date: new Date(referralDate),
        referral_received_by: referralReceivedBy,
        follow_up_action_taken: followUpActionTaken,
        comments: comments
      }
    });
    res.status(201).json(newReferral);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create referral' });
  }
});

dotenv.config();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
