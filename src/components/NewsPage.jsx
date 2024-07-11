import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewItems';
import NavBar from './NavBar';
import Footer from './Footer';
import '../assets/scss/main.scss';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { getAllNews } from '../Api';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getAllNews();
        setNews(newsData);
        setFilteredNews(newsData);
      } catch (error) {
        setError('Error fetching news: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const results = news.filter(newsItem =>
      (newsItem.title && newsItem.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (newsItem.description && newsItem.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredNews(results);
  }, [searchTerm, news]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="news-page">
      <NavBar />
      <Container>
        <Row className="my-4">
          <Col className='mt-4'>
            <Form>
              <Form.Group controlId="search" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Cherchez une actualité"
                  className="form-control"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <div className='d-flex flex-column mb-5'>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            filteredNews.map((newsItem, index) => (
              <NewsItem
                key={index}
                title={newsItem.title}
                description={newsItem.description}
                date={newsItem.date}
              />
            ))
          )}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default NewsPage;
