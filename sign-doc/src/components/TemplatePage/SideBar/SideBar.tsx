import { SidebarProps } from '../../../types/types';
import InputFields from './InputFields/InputFields';
import InputInfo from './InputInfo/InputInfo';
import "./SideBar.css";

const Sidebar: React.FC<SidebarProps> = ({
  lastName,
  firstName,
  iin,
  setLastName,
  setFirstName,
  setIIN,
  iinProperties,
  lastNameProperties,
  firstNameProperties,
}) => {
  return (
    <div className='side-bar'>
      <InputInfo />
      <InputFields
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

export default Sidebar;
