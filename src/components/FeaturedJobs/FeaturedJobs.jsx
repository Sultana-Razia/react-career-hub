import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div>
                <h2 className="text-[#1A1919] text-5xl font-extrabold text-center mb-4">Featured Jobs {jobs.length}</h2>
                <p className="text-[#757575] font-medium text-center mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`text-center py-10 ${dataLength === jobs.length && 'hidden'}`}>
                <button onClick={() => setDataLength(jobs.length)} className="text-white text-xl font-extrabold bg-[#7E90FE] py-5 px-7 rounded-lg">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;