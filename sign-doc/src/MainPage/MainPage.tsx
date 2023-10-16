import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UploadIcon from "../img/fileUpload.svg";
import InsertIcon from "../img/insert.svg";
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
      fileReader.readAsDataURL(file);
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
    navigate('/doc', { state });
  };

  return (
    <div className='app'>
      <div
        className='drop-area'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className='drag-drop-area'>
        {file ? (
            <>
              <img src={InsertIcon} alt="Insert File" />
              <p className="centered-text">{file.name}</p>
              <div className="button-group">
                <button
                  className="delete-button"
                  onClick={handleDeleteButton}
                >
                  Удалить
                </button>
              </div>
            </>
          ) : (
            <>
              <label htmlFor="file-loader-button" className="file-uploader__upload-label">
                <img src={UploadIcon} alt="Upload File" />
              </label>
                <input
                  id="file-loader-button"
                  type="file"
                  className="file-uploader__upload-button"
                  onChange={handleOnChange}
              />
              <p className="centered-text">Выберите файл или перенесите его сюда</p>
            </>
          )}
        </div>
      </div>
      <div className='form-group'>
        <textarea
          className='textarea-form'
          value={jsonInput}
          onChange={handleJsonInputChange}
          ></textarea>
      </div>
      <div className='button-area'>
        <button
          className={`button-next${file ? ' active' : ''}`}
          disabled={!file}
          onClick={handleNextButtonClick}
        >
          Далее
        </button>
      </div>
    </div>
  );
}

export default MainPage;
