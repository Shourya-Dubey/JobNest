import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';


// const randomJobs = [1,2,3,4,5,6,7,8];
const LatestJobs = () => {

  const {allJobs} = useSelector(store=>store.job);

  return (
    <div className=" max-w-screen-lg mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="bg-gradient-to-b from-[#e9ee56] via-[#f44f2a] to-[#f05696] text-transparent bg-clip-text">
          Latest & Top
        </span>
        Job Openings
      </h1>

      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length <= 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs
            .slice(0, 6)
            .map((job) => <LatestJobCards key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
}

export default LatestJobs