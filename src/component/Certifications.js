// Certifications.js
export default function Certifications({ addCertification, certificationInput, setCertificationInput }) {
  return (
    <div className="inputs">
      <h1>Certifications</h1>
      <input
        type="text"
        placeholder="Enter Certification"
        value={certificationInput}
        onChange={(e) => setCertificationInput(e.target.value)}
      />
      <button type="button" onClick={addCertification}
      className="submit-btn"
      >
        Add Certification
      </button>
    </div>
  );
}
