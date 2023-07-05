const express = require('express');
const { locationController } = require('../controllers/locationController');

const locationRoutes = express.Router();


locationRoutes.post('/', locationController.add)
locationRoutes.get('/', locationController.getAll)
locationRoutes.get('/:id',locationController.getById)
locationRoutes.get('/:locationId/jobs',locationController.getJobsByLocationID)

module.exports = {
    locationRoutes
}