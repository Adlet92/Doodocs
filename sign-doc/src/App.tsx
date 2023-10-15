import { useState } from 'react';
import './App.css';
import UploadIcon from "./img/fileUpload.svg";
import InsertIcon from "./img/insert.svg";

const App = () => {
  const [file, setFile] = useState();

  const handleOnChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setFile(file);
  };

  return (
    <div className='app'>
      <div className='drop-area'>
        <div className='drag-drop-area'>
        {file ? (
            <>
              <img src={InsertIcon} alt="Insert File" />
              <p className="centered-text">{file.name}</p>
              <div className="button-group">
                <button className="delete-button">Удалить</button>
              </div>
              {/* <button className='delete-button'>Удалить</button> */}
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
        <textarea className='textarea-form'></textarea>
      </div>
      <div className='button-area'>
        <button className={`button-next${file ? ' active' : ''}`}>Далее</button>
      </div>
    </div>
  );
}

export default App;
