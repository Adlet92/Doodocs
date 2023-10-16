// SideBar.js

import InputField from './InputField';

const SideBar = ({
  fieldRequirements,
  lastName,
  setLastName,
  firstName,
  setFirstName,
  iin,
  setIIN,
}) => {
  return (
    <div className="side-bar">
      {/* ... other components ... */}
      <InputField label="Фамилия" value={lastName} onChange={setLastName} />
      <InputField label="Имя" value={firstName} onChange={setFirstName} />
      <InputField label="ИИН" value={iin} onChange={setIIN} />
    </div>
  );
};

export default SideBar;
