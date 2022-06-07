const mongoose = require("mongoose");
const Joi = require("joi");

const interviewSchema = mongoose.Schema({
  adminID: { type: mongoose.Schema.Types.ObjectId, ref: 'admin' },
  candidateID: { type: mongoose.Schema.Types.ObjectId, ref: 'candidate' },
  timestamps: true,
});

const validateInterview = (interview) => {

};

const Interview = mongoose.model("Interview", interviewSchema);
module.exports.Interview = Interview;
module.exports.interviewSchema = interviewSchema;
