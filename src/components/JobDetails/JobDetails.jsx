import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id, job_description, job_responsibility, salary } = useParams();
    const job = jobs.find(job => job.id == id);
    console.log(job_description);
    return (
        <div>
            <h2>Job Details of: {id}</h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border md:col-span-3">
                    <p><span>Job Description</span>{job.job_description}</p>
                    <p>{job.job_responsibility}</p>
                </div>
                <div className="border">
                    <p>Salary{salary}</p>
                    <div className="bg-[#7E90FE] text-center rounded-lg py-3">
                        <button className="text-xl font-extrabold text-white ">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;