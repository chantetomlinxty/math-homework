const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const result = calculateHomework(req.query.assignment);
  res.json({ assignment: req.query.assignment, result });
});

function calculateHomework(assignment) {
  // Your math homework calculation logic goes here
}

app.listen(3000, () => console.log('Server started on port 3000'));
