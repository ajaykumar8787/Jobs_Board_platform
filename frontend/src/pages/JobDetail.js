import React, { useEffect, useState } from "react";
import API from "../api/api";
import { Link, useParams } from "react-router-dom";

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    API.get(`/jobs/${id}`).then((res) => setJob(res.data));
  }, [id]);

  if (!job) return <h3>Loading...</h3>;

  return (
    <div style={{ padding: 30 }}>
      <h2>{job.title}</h2>
      <p><b>Company:</b> {job.company}</p>
      <p><b>Location:</b> {job.location}</p>
      <p><b>Salary:</b> {job.salary}</p>
      <p>{job.description}</p>

      <Link to={`/job/edit/${job._id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default JobDetail;
