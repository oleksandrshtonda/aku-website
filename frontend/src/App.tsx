import './App.css';
import { Header } from './commonComponents/Header';
import { MainPage } from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App;
