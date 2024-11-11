import React from "react";
import JobCards from "./JobCards";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LatestJobs() {
  const { allJobs } = useSelector((store) => store.job);
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top</span> Jobs Opening
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length <= 0 ? (
          <span>No Job Available!</span>
        ) : (
          allJobs
            .slice(0, 6)
            .map((job) => (
              <JobCards
               
                key={job._id}
                job={job}
              />
            ))
        )}
      </div>
    </div>
  );
}

export default LatestJobs;