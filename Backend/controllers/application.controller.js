import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

//Apply for job
export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(400).json({
        message: "Job Id is required.",
        success: false,
      });
    }

    //Check if user has already applied or not
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied for this Job.",
        success: false,
      });
    }

    //Check if job exist
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found.",
        success: false,
      });
    }

    //Create new applicant
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    job.applications.push(newApplication._id);

    await job.save();

    return res.status(201).json({
      message: "Job applied successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//Get Applied Jobs    -->> This is for student
export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.find({ applicant: userId })
      .sort({
        created_At: -1,
      })
      .populate({
        path: "job",
        options: { sort: { created_At: -1 } },
        populate: {
          path: "company",
          options: { sort: { created_At: -1 } },
        },
      });

    if (!application) {
      return res.status(404).json({
        message: "No Applications",
        success: false,
      });
    }
    return res.status(200).json({
      application,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//Get Applicants     -->> This is for Admin || recruiters to see who have applied for his/her job
export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "applications",
      options: { sort: { created_At: -1 } },
      populate: {
        path: "applicant",
        options: { sort: { created_At: -1 } },
      },
    });

    if (!job) {
      return res.status(404).json({
        message: "Job not found.",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//Update Applicant status
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;

    if (!status) {
      return res.status(400).json({
        message: "Status is required.",
        success: false,
      });
    }

    //Find the application By application ID
    const application = await Application.findOne({ _id: applicationId });
    if (!application) {
      return res.status(404).json({
        message: "Application not found.",
        success: false,
      });
    }

    //Update the status
    application.status = status.toLowerCase(); //Get the status in lower case
    await application.save();

    return res.status(200).json({
      message: "Status updates successfully.",
      application,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
