import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Header } from './commonComponents/Header';
import { Footer } from './commonComponents/Footer';

import { MainPage } from './pages/MainPage';
import { NewsPage } from './pages/NewsPage';
import { OfficialdomPage } from './pages/OfficialdomPage';
import { KennelsListPage } from './pages/KennelsListPage';
import { OrderDocumentsPage } from './pages/OrderDocumentsPage';
import { ContactsPage } from './pages/ContactsPage';

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/officialdom" element={<OfficialdomPage />} />
        <Route path="/kennels" element={<KennelsListPage />} />
        <Route path="/order-documents" element={<OrderDocumentsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App;
