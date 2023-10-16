import React, { ChangeEvent } from 'react';

interface JsonInputProps {
  jsonInput: string;
  onJsonInputChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const JsonInput: React.FC<JsonInputProps> = ({ jsonInput, onJsonInputChange }) => {
  return (
    <div className='form-group'>
      <textarea
        className='textarea-form'
        value={jsonInput}
        onChange={onJsonInputChange}
      ></textarea>
    </div>
  );
};

export default JsonInput;
