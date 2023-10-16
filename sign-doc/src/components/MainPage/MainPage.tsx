import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../utils/routes';
import Button from './Button/Button';
import FileUpload from './FileUpload/FileUpload';
import JsonInput from './JsonInput/JsonInput';
import './MainPage.css';

const MainPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileURL, setFileURL] = useState<string | null>(null);
  const [jsonInput, setJsonInput] = useState<string>('');
  const navigate = useNavigate();
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setFileURL(fileReader.result as string);
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      setFile(file);
      fileReader.readAsText(file, 'utf-8');
    }
  };
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files && event.dataTransfer.files.length) {
      const file = event.dataTransfer.files[0];
      setFile(file);
      fileReader.readAsText(file, 'utf-8');
    }
  };
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleJsonInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(event.target.value);
  };

  const handleDeleteButton = () => {
    setFile(null);
  };

  const handleNextButtonClick = () => {
    let fieldRequirements;
    try {
      fieldRequirements = JSON.parse(jsonInput);
    } catch (error) {
      alert('Invalid JSON format. Please enter a valid JSON array.');
      return;
    }
    const state = {
      htmlContent: fileURL,
      fieldRequirements: fieldRequirements,
      fileName: file?.name || null
    };
    navigate(routes.template, { state });
  };


  const isActive = !!file && jsonInput.trim() !== '';

  return (
    <div className='app'>
      <FileUpload
        file={file}
        onFileDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onFileChange={handleOnChange}
        onFileDelete={handleDeleteButton}
      />
      <JsonInput jsonInput={jsonInput} onJsonInputChange={handleJsonInputChange} />
      <Button isActive={isActive} onClick={handleNextButtonClick} disabled={!file} />
    </div>
  );
}

export default MainPage;
