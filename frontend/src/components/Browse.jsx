import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";

const randomJobs = [1,2,3];

const Browse = () => {
  return (
    <div>
      <Navbar/>
      <div className="max-w-screen-lg flex flex-col mx-auto mt-3">
        <h1 className="font-semibold text-xl mt-10">Search Results ({randomJobs.length})</h1>
        <div className="grid grid-cols-3 gap-4">
          {randomJobs.map((item, index) => {
            return <Job />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
