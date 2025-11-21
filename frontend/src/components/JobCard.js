import React from "react";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 15, marginBottom: 15 }}>
      <h3>{job.title}</h3>
      <p><b>Company:</b> {job.company}</p>
      <p><b>Location:</b> {job.location}</p>

      <Link to={`/job/${job._id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default JobCard;
