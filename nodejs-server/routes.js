const express = require('express');
const studentModel = require('./models');
const app = express();

app.post('/add_student', async (request, response) => {
  const Student = new studentModel(request.body);

  try {
    await Student.save();
    response.send(Student);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get('/students', async (request, response) => {
  const students = await studentModel.find({});

  try {
    response.send(students);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
