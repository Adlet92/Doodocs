import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LogoIcon from "../img/Logo.svg";
import './TemplatePage.css';

const TemplatePage = () => {
  const location = useLocation();
  const { htmlContent, fieldRequirements } = location.state || {};
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [iin, setIIN] = useState('');

  const findFieldRequirement = (fieldName: string) => {
    return fieldRequirements.find((field: any) => field.name === fieldName) || {};
  };

  const lastNameField = findFieldRequirement('Фамилия');
  const firstNameField = findFieldRequirement('Имя');
  const iinField = findFieldRequirement('ИИН');

  const isRequiredLastName = lastNameField.is_required || false;
  const hasMaxLastName = lastNameField.attrs.has_max || false;
  const maxLastName = hasMaxLastName ? lastNameField.attrs.max : undefined;
  const hasMinLastName = lastNameField.attrs.has_min || false;
  const minLastName = hasMinLastName ? lastNameField.attrs.min : undefined;

  const isRequiredFirstName = firstNameField.is_required || false;
  const hasMaxFirstName = firstNameField.attrs.has_max || false;
  const maxFirstName = hasMaxFirstName ? firstNameField.attrs.max : undefined;
  const hasMinFirstName = firstNameField.attrs.has_min || false;
  const minFirstName = hasMinFirstName ? firstNameField.attrs.min : undefined;

  const isRequiredIIN = iinField.is_required || false;
  const hasMaxIIN = iinField.attrs.has_max || false;
  const maxIIN = hasMaxIIN ? iinField.attrs.max : undefined;
  const hasMinIIN = iinField.attrs.has_min || false;
  const minIIN = hasMinIIN ? iinField.attrs.min : undefined;
  const isNumericIIN = iinField.attrs.numeric || false;

  const updatedHtmlContent = htmlContent
    .replace('Фамилия', `${lastName || 'Фамилия'}`)
    .replace('Имя', `${firstName || 'Имя'}`)
    .replace('ИИН', `${iin || 'ИИН'}`);


  return (
    <div className='template-page'>
      <div className='page-header'>
        <img src={LogoIcon} alt="Logo" />
        <p></p>
      </div>
      <div className='form-group'>
        <div
          className='webpage-preview'
          dangerouslySetInnerHTML={{ __html: updatedHtmlContent }}
        >
        </div>
      </div>
      <div className='input-forms'>
        <div className='input-info'>
          <h3>Пожалуйста, заполните данные</h3>
          <p>После заполнения и отправки формы будет создан документ с введенными данными.</p>
        </div>
        <div className='inputs'>
          <p>Фамилия</p>
          <input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required={isRequiredLastName}
            maxLength={maxLastName}
            minLength={minLastName}
          />
        </div>
        <div className='inputs'>
          <p>Имя</p>
          <input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required={isRequiredFirstName}
            maxLength={maxFirstName}
            minLength={minFirstName}
          />
        </div>
        <div className='inputs'>
          <p>ИИН</p>
          <input type='text'
            value={iin}
            onChange={(e) => {
              if (!isNumericIIN || /^\d*$/.test(e.target.value)) {
                setIIN(e.target.value);
              }
            }}
            required={isRequiredIIN}
            maxLength={maxIIN}
            minLength={minIIN}
            pattern={isNumericIIN ? '\\d*' : undefined}
          />
        </div>
      </div>
    </div>
  );
}

export default TemplatePage;
