const {Location} = require('../models/Location');
const {JobLocation} = require('../models/JobLocation');

const locationController = {
    add: async (req, res) => {
        try {
            let location = new Location({
                name: req.body.name,
                icon: req.body.icon,
            });
            await location.save();
            if(req.body.jobs !=null){
              let joblocation = new JobLocation({
                jobId : req.body.jobs,
                locationId : location._id
              })
  
              await joblocation.save();
            }
            

            res.status(201).json(location);
        } catch (error) {
            res.status(500).json(error)
        }

    },
    getAll: async (req,res) => {

        try {
            const data = await Location.find();
            res.json(data);
        } catch (error) {
            res.status(500).json(error);
        }

    },
    getById: async (req,res) => {

        try {
            const location = await Location.findById(req.params.id);
            if (location) {
              res.json(location);
            } else {
              res.status(404).json({ error: 'Location not found' });
            }
          } catch (error) {
            res.status(500).json(error);
          }

    },

    getJobsByLocationID: async (req, res) => {
        try {
          const jobs = await JobLocation.find({ locationId: req.params.locationId })
            .populate('jobId')
            .exec();
          res.json(jobs.map((JobLocation) => JobLocation.jobId));
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
    }
}

module.exports = {
    locationController
}