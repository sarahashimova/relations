const { default: mongoose } = require("mongoose");

const JobLocationSchema = new mongoose.Schema({
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    locationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  });
  
const JobLocation = mongoose.model('JobLocation', JobLocationSchema);

module.exports = {
    JobLocation
}