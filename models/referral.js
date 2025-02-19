const prisma = require('../config/db');

// Create a referral record
const createReferral = async (data) => {
  return await prisma.referral.create({
    data: {
      referrer_name: data.referrer_name,
      referrer_email: data.referrer_email,
      referrer_phone: data.referrer_phone,
      referee_name: data.referee_name,
      referee_email: data.referee_email,
      referee_phone: data.referee_phone,
      course_id: data.course_id,
      referral_code: data.referral_code,
      consent: data.consent,
    },
    include: { course: true }
  });
};

module.exports = { createReferral };
