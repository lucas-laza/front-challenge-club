import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Registration from './components/Registration';
import NewsPage from './components/NewsPage';
import ClubInfoPage from './components/AboutUs';
import ContactPage from './components/ContactPage';
import EventsPage from './components/EventPage';
import AdminPage from './components/AdminPage';
import ProfilePage from './components/ProfilePage';

function AppRoutes() {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin');
  const routes = <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Registration />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/about-us" element={<ClubInfoPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/events" element={<EventsPage />} />
                  <Route path="/admin-page" element={<AdminPage />} />
                  <Route path="/profile" element={<ProfilePage token={token} />} />
                </Routes>
  const adminRoutes = <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/about-us" element={<ClubInfoPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/admin-page" element={<AdminPage />} />
                    <Route path="/profile" element={<ProfilePage token={token} />} />
                  </Routes>
  return (
    <Router>
      {isAdmin === true ? adminRoutes :routes}
    </Router>
  );
}

export default AppRoutes;
