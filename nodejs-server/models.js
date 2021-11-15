const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
  },
  marks: {
    type: Number,
    default: 0,
  },
  gender: {
    type: String,
  },
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
