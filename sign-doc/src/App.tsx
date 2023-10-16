import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import TemplatePage from './components/TemplatePage/TemplatePage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/doc" element={<TemplatePage />} />
        {/* <Route
          path="*"
          element={
            <PageNotFound />
            }
          /> */}
        </Routes>
    </div>
  );
}

export default App;
