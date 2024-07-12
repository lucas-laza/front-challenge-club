import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Registration from './components/Registration';
import NewsPage from './components/NewsPage';
import ClubInfoPage from './components/AboutUs';
import ContactPage from './components/ContactPage';
import EventsPage from './components/EventPage';
import ProfilePage from './components/ProfilePage';
import CreateEvent from './components/AdminEventsCreate';
import GestionEvent from './components/AdminEventsGestion';
import AdminNewsCreate from './components/AdminNewsCreate';
import AdminNewsGestion from './components/AdminNewsGestion';
import AdminUsersGestion from './components/UserGestion';
import Privacy from './components/Privacy';

function AppRoutes() {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin');
  console.log('isAdmin', isAdmin);
  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/about-us" element={<ClubInfoPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/profile" element={<ProfilePage token={token} />} />
    </Routes>
  );
  const adminRoutes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/about-us" element={<ClubInfoPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/admin/events/create" element={<CreateEvent />} />
      <Route path="/admin/events/gestion" element={<GestionEvent />} />
      <Route path="/admin/news/create" element={<AdminNewsCreate />} />
      <Route path="/admin/news/gestion" element={<AdminNewsGestion />} />
      <Route path="/admin/users/gestion" element={<AdminUsersGestion />} />
      <Route path="/profile" element={<ProfilePage token={token} />} />
    </Routes>
  );
  return <Router>{isAdmin === 'true' ? adminRoutes : routes}</Router>;
}

export default AppRoutes;
