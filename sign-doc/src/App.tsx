import './App.css';
import UploadIcon from "./img/fileUpload.svg";

const App = () => {
  // const [drag, setDrag] = useState(true);

  return (
    <div className='app'>
      <div className='drop-area'>
        <div className='drag-drop-area'>
          <img src={UploadIcon} alt='Upload File' />
          <p className='centered-text'>Выберите файл или перенесите его сюда</p>
        </div>
      </div>
      <div className='form-group'>
        <textarea className='textarea-form'></textarea>
      </div>
      <div className='button-area'>
        <button className='button-next'>Далее</button>
      </div>
    </div>
  );
}

export default App;
