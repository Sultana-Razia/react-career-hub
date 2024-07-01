

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src={logo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="text-[#7E90FE] font-bold py-4">
                    <button className="border-2 border-[#7E90FE] px-5 py-2 rounded mr-4">{remote_or_onsite}</button>
                    <button className="border-2 border-[#7E90FE] px-5 py-2 rounded">{job_type}</button>
                </div>
                <div className="card-actions">
                    <button className="btn bg-[#7E90FE] text-white font-bold text-xl">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;