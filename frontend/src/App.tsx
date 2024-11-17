import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Header } from './commonComponents/Header';
import { Footer } from './commonComponents/Footer';

import { MainPage } from './pages/MainPage';
import { NewsPage } from './pages/NewsPage';
import { OfficialdomPage } from './pages/OfficialdomPage';
import { OrderDocumentsPage } from './pages/OrderDocumentsPage';
import { ContactsPage } from './pages/ContactsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { StructureOfOrganizationPage } from './pages/StructureOfOrganizationPage';
import { AboutUsPage } from './pages/AboutUsPage';

function App() {
  return (
    <>
      <Header />
      
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/officialdom" element={<OfficialdomPage />} />
          <Route path="/structure-of-organization" element={<StructureOfOrganizationPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          
          <Route path="/order-documents" element={<OrderDocumentsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage /> } />
        </Routes>
      </main>
    
      <Footer />
    </>
  )
}

export default App;
