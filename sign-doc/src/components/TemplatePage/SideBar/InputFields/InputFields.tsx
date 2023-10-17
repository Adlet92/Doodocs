import { useState } from "react";
import { SidebarProps } from "../../../../types/types";
import "./InputFields.css";

const InputFields: React.FC<SidebarProps> = ({
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

  const [lastNameError, setLastNameError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [iinError, setIINError] = useState(false);

  const handleBlur = (value: string, inputProperties: any, setError: (error: boolean) => void) => {
    setError(
      (inputProperties.isRequired && value.trim().length === 0) ||
      (inputProperties.hasMin && value.trim().length < inputProperties.min)
    );
  };


  return (
    <>
       <div className={`inputs ${lastNameError ? 'inputs-error' : ''}`}>
        <p className='inputs-label'>Фамилия</p>
        <input
          type='text'
          value={lastName}
          className='inputs-width'
          onChange={(e) => setLastName(e.target.value)}
          onBlur={() => handleBlur(lastName, lastNameProperties, setLastNameError)}
          maxLength={lastNameProperties.max}
        />
      </div>
      <div className={`inputs ${firstNameError ? 'inputs-error' : ''}`}>
        <p className='inputs-label'>Имя</p>
        <input
          type='text'
          value={firstName}
          className='inputs-width'
          onChange={(e) => setFirstName(e.target.value)}
          onBlur={() => handleBlur(firstName, firstNameProperties, setFirstNameError)}
          maxLength={firstNameProperties.max}
        />
      </div>
      <div className={`inputs ${iinError ? 'inputs-error' : ''}`}>
        <p className='inputs-label'>ИИН</p>
        <input
          type='text'
          value={iin}
          className='inputs-width'
          onChange={(e) => {
            if (!iinProperties.isNumeric || /^\d*$/.test(e.target.value)) {
              setIIN(e.target.value);
            }
          }}
          onBlur={() => handleBlur(iin, iinProperties, setIINError)}
          maxLength={iinProperties.max}
          pattern={iinProperties.isNumeric ? '\\d*' : undefined}
        />
      </div>
    </>
  );
}

export default InputFields;
