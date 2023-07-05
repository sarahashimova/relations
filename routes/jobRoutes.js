const express = require('express');
const { jobController } = require('../controllers/jobController');

const jobRoutes = express.Router();


jobRoutes.post('/', jobController.add)
jobRoutes.get('/', jobController.getAll)
jobRoutes.get('/:id',jobController.getById)


module.exports = {
    jobRoutes
}