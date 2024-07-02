import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id, job_description, job_responsibility, educational_requirements, experiences, salary } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id == idInt);
    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You have applied successfully.')
    }

    return (
        <div>
            <h2>Job Details of: {id}</h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-3">
                    <p className="text-[#757575] font-medium mb-6"><span className="text-[#1A1919] font-extrabold">Job Description: </span>{job.job_description}</p>
                    <p className="text-[#757575] font-medium mb-6"><span className="text-[#1A1919] font-extrabold">Job Responsibility: </span>{job.job_responsibility}</p>
                    <p className="text-[#757575] font-medium mb-6">
                        <span className="text-[#1A1919] font-extrabold">Educational Requirements: </span>{job.educational_requirements}</p>
                    <p className="text-[#757575] font-medium mb-6">
                        <span className="text-[#1A1919] font-extrabold">Experiences: </span>
                        {job.experiences}</p>
                </div>
                <div className="border">
                    <p>Salary{salary}</p>
                    <div className="bg-[#7E90FE] text-center rounded-lg py-3">
                        <button onClick={handleApplyJob} className="text-xl font-extrabold text-white ">Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;