import React, { useEffect, useState } from "react";
import API from "../api/api";
import JobCard from "../components/JobCard";

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs").then((res) => setJobs(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Latest Jobs</h2>

      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
}

export default Home;
