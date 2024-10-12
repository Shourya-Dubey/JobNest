import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setSeachedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

// const randomJobs = [1,2,3];

const Browse = () => {

  useGetAllJobs();
  const dispatch = useDispatch();
  const { allJobs } = useSelector((state) => state.job);

  useEffect(()=>{
    return () => {
      dispatch(setSeachedQuery(""));
    }
  },[])

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg flex flex-col mx-auto mt-3">
        <h1 className="font-semibold text-xl mt-10">
          Search Results ({allJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {allJobs.map((job) => {
            return <Job key={job._id} job={job} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
