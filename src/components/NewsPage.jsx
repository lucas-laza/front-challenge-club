import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewItems';
import NavBar from './NavBar';
import Footer from './Footer';
import '../assets/scss/main.scss';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import newsData from '../json/newsdata.json';

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsData);
  }, []);

  return (
    <div className="news-page">
      <NavBar />
      <Container>
        <Row className="my-4">
          <Col>
            <h1 className="text-center mb-4">Nos actualités</h1>
            <Form>
              <Form.Group controlId="search" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Cherchez une actualité"
                  className="form-control"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Filtrer
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          {news.map((newsItem, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <NewsItem
                title={newsItem.title}
                description={newsItem.description}
                date={newsItem.date}
              />
            </Col>
          ))}
        </Row>
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
