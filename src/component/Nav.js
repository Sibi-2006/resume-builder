import React from "react";
import { useNavigate } from "react-router-dom";
import ResumeExport from "./ResumeExport";
import Resume from "./Resume";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <h1>Basic Resume Builder.</h1>
      <button onClick={() => navigate('/previwe' )} className="btn">Preview ....</button>
    </div>
  );
}
