import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Header, LINKS } from './commonComponents/Header';
import { Footer } from './commonComponents/Footer';

import { MainPage } from './pages/MainPage';
import { NewsPage } from './pages/NewsPage';
import { OfficialdomPage } from './pages/OfficialdomPage';
import { OrderDocumentsPage } from './pages/OrderDocumentsPage';
import { ContactsPage } from './pages/ContactsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { StructureOfOrganizationPage } from './pages/StructureOfOrganizationPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ProtocolsPage } from './pages/ProtocolsPage';
import { useState } from 'react';
import BurgerMenu from './commonComponents/Header/BurgerMenu/BurgerMenu.tsx';
import { BreedingRulesPage } from './pages/breeding-rules';

function App() {
  const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false);
  
  return (
    <>
      <Header active={mobileMenuActive} setActive={setMobileMenuActive} />
      
      <main className="main">
        {mobileMenuActive && <p>hehe</p>}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/officialdom">
            <Route path="" element={<OfficialdomPage />} />
            <Route path="regulations" element={<ProtocolsPage initShowRegulations={true} />} />
            <Route path="protocols" element={<ProtocolsPage />} />
            <Route path="breeding-rules" element={<BreedingRulesPage />} />
          </Route>
          
          <Route path="/structure-of-organization" element={<StructureOfOrganizationPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/order-documents" element={<OrderDocumentsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage /> } />
        </Routes>
        
        <BurgerMenu links={LINKS} shown={mobileMenuActive} />
      </main>
    
      <Footer />
    </>
  )
}

export default App;
