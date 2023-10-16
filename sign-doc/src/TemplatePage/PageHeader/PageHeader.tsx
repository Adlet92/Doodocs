import LogoIcon from "../../img/Logo.svg";

interface PageHeaderProps {
  capitalizedFileName: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ capitalizedFileName }) => (
  <div className="page-header">
    <img src={LogoIcon} alt="Logo" className="logo" />
    <p className="document-name">{capitalizedFileName}</p>
  </div>
);

export default PageHeader;
