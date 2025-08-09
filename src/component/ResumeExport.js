import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ResumeExport({ children }) {
  const resumeRef = useRef();

  const handleDownloadPDF = async () => {
    const input = resumeRef.current;

    await new Promise((resolve) => setTimeout(resolve, 500));

    html2canvas(input, {
      scale: 2,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("My_Resume.pdf");
    });
  };

  return (
    <div>
      <button
        onClick={handleDownloadPDF}
       className="btn-d"
      >
        Download PDF
      </button>

      <div ref={resumeRef}>
        {children}
      </div>
    </div>
  );
}
