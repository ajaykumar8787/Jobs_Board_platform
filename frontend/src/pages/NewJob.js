import React, { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

function NewJob() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    description: "",
    location: "",
    salary: "",
  });

  const navigate = useNavigate();

  const createJob = async () => {
    await API.post("/jobs", form);
    navigate("/");
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Post a New Job</h2>

      <input placeholder="Job Title" onChange={(e) => setForm({ ...form, title: e.target.value })} /><br /><br />
      <input placeholder="Company" onChange={(e) => setForm({ ...form, company: e.target.value })} /><br /><br />
      <input placeholder="Location" onChange={(e) => setForm({ ...form, location: e.target.value })} /><br /><br />
      <input placeholder="Salary" onChange={(e) => setForm({ ...form, salary: e.target.value })} /><br /><br />

      <textarea
        rows="5"
        placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      ></textarea><br /><br />

      <button onClick={createJob}>Post Job</button>
    </div>
  );
}

export default NewJob;
