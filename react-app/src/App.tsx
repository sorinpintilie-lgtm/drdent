import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import StomatologiePediatrica from './pages/StomatologiePediatrica';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Fees from './pages/Fees';
import FAQ from './pages/FAQ';
import Resources from './pages/Resources';
import ResourceArticle from './pages/ResourceArticle';
import NotFound from './pages/NotFound';
import Chat from './pages/Chat';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="servicii" element={<Services />} />
        <Route path="stomatologie-pediatrica" element={<StomatologiePediatrica />} />
        <Route path="preturi" element={<Fees />} />
        <Route path="despre-noi" element={<Team />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="resources" element={<Resources />} />
        <Route path="resources/:slug" element={<ResourceArticle />} />
        <Route path="contact" element={<Contact />} />
        <Route path="chat" element={<Chat />} />
        <Route path="politica-confidentialitate" element={<PrivacyPolicy />} />
        <Route path="politica-cookies" element={<CookiePolicy />} />
        <Route path="termenii-conditii" element={<TermsOfService />} />
        <Route path="pedodontie" element={<Navigate to="/stomatologie-pediatrica" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
