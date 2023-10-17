import "./DocumentForm.css";

const DocumentForm = ({ updatedHtmlContent }: { updatedHtmlContent: string }) => (
  <div className="document-form">
    <div className="webpage-preview" dangerouslySetInnerHTML={{ __html: updatedHtmlContent }} />
  </div>
);

export default DocumentForm;
