import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFieldRequirements from '../utils/fieldRequirements';
import { formatFileName, sanitizeHtmlContent } from '../utils/format';
import DocumentForm from './DocumentForm/DocumentForm';
import PageHeader from './PageHeader/PageHeader';
import Sidebar from './SideBar/SideBar';
import './TemplatePage.css';

const LAST_NAME_FIELD = 'Фамилия';
const FIRST_NAME_FIELD = 'Имя';
const IIN_FIELD = 'ИИН';

const TemplatePage = () => {
  const location = useLocation();
  const { htmlContent, fieldRequirements, fileName } = location.state || {};
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [iin, setIIN] = useState('');

  const capitalizedFileName = formatFileName(fileName);
  const sanitizedHtmlContent = sanitizeHtmlContent(htmlContent);
  const { getFieldProperties } = useFieldRequirements(fieldRequirements);

  const lastNameProperties = getFieldProperties(LAST_NAME_FIELD);
  const firstNameProperties = getFieldProperties(FIRST_NAME_FIELD);
  const iinProperties = getFieldProperties(IIN_FIELD);

  const updatedHtmlContent = sanitizedHtmlContent
    .replace(LAST_NAME_FIELD, `${lastName || LAST_NAME_FIELD}`)
    .replace(FIRST_NAME_FIELD, `${firstName || FIRST_NAME_FIELD}`)
    .replace(IIN_FIELD, `${iin || IIN_FIELD}`);

  return (
    <div className='template-page'>
      <PageHeader capitalizedFileName={capitalizedFileName} />
      <DocumentForm updatedHtmlContent={updatedHtmlContent} />
       <Sidebar
        lastName={lastName}
        firstName={firstName}
        iin={iin}
        setLastName={setLastName}
        setFirstName={setFirstName}
        setIIN={setIIN}
        iinProperties={iinProperties}
        lastNameProperties={lastNameProperties}
        firstNameProperties={firstNameProperties}
      />
    </div>
  );
}

export default TemplatePage;
