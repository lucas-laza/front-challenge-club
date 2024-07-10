import { useRef } from 'react';
import EventCard from './EventCard';
import '../assets/scss/main.scss';

const EventCarousel = ({ events }) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount =
        direction === 'left'
          ? -carouselRef.current.clientWidth
          : carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="event-carousel-container mb-4">
      <div className="event-carousel" ref={carouselRef}>
        {events.map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            title={event.title}
            description={event.description}
            date={event.date}
            location={event.location}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
