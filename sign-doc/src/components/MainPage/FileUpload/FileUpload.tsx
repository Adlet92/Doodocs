import UploadIcon from "../../img/fileUpload.svg";
import InsertIcon from "../../img/insert.svg";

interface FileUploadProps {
  file: File | null;
  onFileDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFileDelete: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ file, onFileDrop, onDragOver, onDragLeave, onFileChange, onFileDelete }) => {
  return (
    <div
      className='drop-area'
      onDrop={onFileDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      <div className='drag-drop-area'>
        {file ? (
          <>
            <img src={InsertIcon} alt="Insert File" />
            <p className="centered-text">{file.name}</p>
            <div className="button-group">
              <button className="delete-button" onClick={onFileDelete}>
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
              onChange={onFileChange}
            />
            <p className="centered-text">Выберите файл или перенесите его сюда</p>
          </>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
