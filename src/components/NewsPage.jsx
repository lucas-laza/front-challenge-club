import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewItems';
import NavBar from './NavBar';
import Footer from './Footer';
import '../assets/scss/main.scss';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { getAllNews } from '../Api';

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getAllNews();
        setNews(newsData);
      } catch (error) {
        setError('Error fetching news: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

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
                />
              </Form.Group>
              <div className='d-flex flex-row'>

              </div>
            </Form>
          </Col>
        </Row>
        <div className='d-flex flex-column mb-5'>
          {news.map((newsItem, index) => (
              <NewsItem
                title={newsItem.title}
                description={newsItem.description}
                date={newsItem.date}
              />
          ))}
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
