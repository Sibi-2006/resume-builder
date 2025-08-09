import Resume from "./Resume";
import ResumeExport from "./ResumeExport";
export default function PreviewPage() {
  return (
 <Route
  path='/previwe' 
  element={
    <ResumeExport>
      <Resume />
    </ResumeExport>
  }
/>


  );
}
