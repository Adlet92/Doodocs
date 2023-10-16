import { useNavigate } from "react-router-dom";
import { routes } from "../utils/routes";
import "./PageNotFound.css";

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

const handleBackToSearch = () => {
    navigate(routes.main);
  };

  return (
    <>
      <div className="notFound-container">
        <div className="title-404">404</div>
        <div className="page-not-found">Page not found</div>
        <button className="back-button" onClick={handleBackToSearch}>
          Back to Search
        </button>
      </div>
    </>
  );
};

export default PageNotFound;
