import React, { useEffect, useState } from "react";
import API from "../api/api";
import { useNavigate, useParams } from "react-router-dom";

function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });

  const [loading, setLoading] = useState(true);

  // Fetch Job Data
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await API.get(`/jobs/${id}`);
        setForm(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load job:", error);
        alert("Failed to load job");
      }
    };
    fetchJob();
  }, [id]);

  // Update Job
  const updateJob = async () => {
    try {
      await API.put(`/jobs/${id}`, form); // <-- sends token automatically
      alert("Job updated successfully!");
      navigate(`/job/${id}`);
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update job. Make sure you are logged in.");
    }
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: 30 }}>
      <h2>Edit Job</h2>

      <input
        placeholder="Job Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      /><br/><br/>

      <input
        placeholder="Company"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      /><br/><br/>

      <input
        placeholder="Location"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      /><br/><br/>

      <input
        placeholder="Salary"
        value={form.salary}
        onChange={(e) => setForm({ ...form, salary: e.target.value })}
      /><br/><br/>

      <textarea
        rows="5"
        placeholder="Job Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      ></textarea><br/><br/>

      <button onClick={updateJob}>Update Job</button>
    </div>
  );
}

export default EditJob;
