import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>My Portfolio</h1>
      {projects.map(project => (
        <div key={project._id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link}>View Project</a>
        </div>
      ))}
    </div>
  );
}

export default App;