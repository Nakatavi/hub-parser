import React from "react";
import "../../../styles/modal.css"; // Import your CSS file for styling
import { setSets } from "../../../services/dataHendler";


const Modal = ({ isOpen, onClose, projects }) => {
  const [unbillableProjects, setUnbillableProjects] = React.useState(new Set());
  const [hardProjects, setHardProjects] = React.useState(new Set());
  const [softProjects, setSoftProjects] = React.useState(new Set());
  if (!isOpen || !projects || !(projects instanceof Set)) return null;

  const toggleUnbillableProject = (project, type) =>{
    let sets = setSets([unbillableProjects, hardProjects,softProjects],project,type)
    setUnbillableProjects(new Set (sets[0]));
    setHardProjects(new Set (sets[1]));
    setSoftProjects(new Set (sets[2]));
  }
  const handleClose = () => {
    onClose([unbillableProjects, hardProjects, softProjects]);
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <h1>Project Statuses</h1>
        <div className="columnsTable">
          <div>
            <h3>Unbillable</h3>
            {Array.from(projects).map((project, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  checked={unbillableProjects.has(project)}
                  onChange={() => toggleUnbillableProject(project, 0)}
                />
                {project}
              </div>
            ))}
          </div>
          <div>
          <h3>Hard</h3>
            {Array.from(projects).map((project, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  checked={hardProjects.has(project)}
                  onChange={() => toggleUnbillableProject(project, 1)}
                />
                {project}
              </div>
            ))}
          </div>
          <div>
          <h3>Soft</h3>
            {Array.from(projects).map((project, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  checked={softProjects.has(project)}
                  onChange={() => toggleUnbillableProject(project,2)}
                />
                {project}
              </div>
            ))}
          </div>
        </div>
        <button className="close-button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};
export default Modal;
