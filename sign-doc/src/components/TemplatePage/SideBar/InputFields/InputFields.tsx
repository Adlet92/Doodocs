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

  return (
    <>
      <div className='inputs'>
        <p className='inputs-label'>Фамилия</p>
        <input
          type='text'
          value={lastName}
          className='inputs-width'
          onChange={(e) => setLastName(e.target.value)}
          required={lastNameProperties.isRequired}
          maxLength={lastNameProperties.max}
          minLength={lastNameProperties.min}
        />
      </div>
      <div className='inputs'>
        <p className='inputs-label'>Имя</p>
        <input
          type='text'
          value={firstName}
          className='inputs-width'
          onChange={(e) => setFirstName(e.target.value)}
          required={firstNameProperties.isRequired}
          maxLength={firstNameProperties.max}
          minLength={firstNameProperties.min}
        />
      </div>
      <div className='inputs'>
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
          required={iinProperties.isRequired}
          maxLength={iinProperties.max}
          minLength={iinProperties.min}
          pattern={iinProperties.isNumeric ? '\\d*' : undefined}
        />
      </div>
    </>
  );
}

export default InputFields;
