const prisma = require('../config/db');

// Create a referral record
const createReferral = async (data) => {
  return await prisma.referralDetails.create({
    data,
    include: {
      student: true,
      referrer: true,
      referredStudent: true,
      course: true,
    },
  });
};

module.exports = {
  createReferral,
};
